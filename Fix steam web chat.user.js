// ==UserScript==
// @name         Fix steam web chat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix some anoyances with the steam web chat
// @author       TomW1605
// @match        https://steamcommunity.com/chat
// @grant        none
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// ==/UserScript==

(function() {
    'use strict';
    var log = document.getElementById('chatlog');

    var chatObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "childList" && mutation.target.className.indexOf("chat_dialog_content_inner") >= 0) {
                //console.log("scrolling");
                $J('.whiteLink').each(function(){if (this.innerText != "Never tell your password to anyone.") {this.href = this.innerText;}});
                var scroll = mutation.target.parentElement.scrollHeight;
                mutation.target.parentElement.scrollTop = scroll;
            }
        });
    });

    chatObserver.observe(log, { childList: true, subtree: true });

    CWebChat.prototype.PollComplete = function( pollid, data )
    {
        console.log(data);
        if ( data.pollid != this.m_pollid )
        {
            // old response (possibley one that JQuery timed out but couldn't stop the script form loading)
            return;
        }

        if ( data.error == 'Timeout' )
        {
            // use the server's timeout time
            if ( data.sectimeout && data.sectimeout > CWebChat.POLL_DEFAULT_TIMEOUT )
                this.m_nSecTimeout = data.sectimeout;

            if ( this.m_nSecTimeout < CWebChat.POLL_MAX_TIMEOUT )
                this.m_nSecTimeout = Math.min( this.m_nSecTimeout + CWebChat.POLL_SUCCESS_INCREMENT, CWebChat.POLL_MAX_TIMEOUT );
        }
        else if ( data.error == 'OK' )
        {
            var messages = data.messages || [];
            var dateBaseTime = new Date();
            var nBaseMSOffset = data.timestamp;
            for ( var i = 0; i < messages.length; i++ )
            {
                var message = messages[i];
                var Friend = message.accountid_from ? this.m_rgPlayerCache[ message.accountid_from ] : null;
                if ( message.type == 'personastate' )
                {
                    if ( Friend )
                    {
                        Friend.m_ePersonaState = message.persona_state;
                        Friend.OnPersonaStateChange();

                        // load new data from the server - other information like in-game state may have changed
                        Friend.Refresh();
                    }
                }
                else if ( message.type == 'saytext' || message.type == 'my_saytext' )
                {
                    if ( Friend )
                    {
                        var nMSInPast = nBaseMSOffset - message.timestamp;
                        var Sender = message.type == 'saytext' ? Friend : this.m_User;
                        var eChatMessageType = ( message.type == 'saytext' ? CWebChat.CHATMESSAGE_TYPE_NORMAL : CWebChat.CHATMESSAGE_TYPE_SELF );

                        if ( this.m_rgChatDialogs[ Friend.m_unAccountID ] )
                        {
                            this.m_rgChatDialogs[ Friend.m_unAccountID ].AppendChatMessage( Sender, new Date( dateBaseTime.getTime() - nMSInPast ), message.text, eChatMessageType );
                        }

                        if ( Sender != this.m_User )
                        {
                            if ( Friend != this.m_ActiveFriend || !this.m_bWindowHasFocus)
                            {
                                Friend.IncrementUnreadMessageCount();
                                if ( this.m_bBrowserSupportsAudio && !this.GetPref( 'soundmuted' ) )
                                    $J('#message_received_audio')[0].play();

                                if ( this.m_bBrowserSupportsNotifications && this.GetPref( 'notifications' ) && Notification.permission == 'granted' )
                                {
                                    var notification = new Notification( '%s sent a message'.replace( /%s/, Friend.m_strName ), { body: message.text, icon: Friend.GetAvatarURL( 'medium' ) } );
                                    var fnOnClick = Friend.m_fnOnClick;
                                    notification.onclick = function() { fnOnClick(); window.focus(); };

                                    // chrome doesn't seem to dismiss these right now, so we'll give it 6 seconds

                                }
                            }

                            this.AddToRecentChats( Friend );

                            // this will not display the nag if the window has focus
                            Friend.DisplayUnreadMessageTitleNag();
                        }
                        else
                        {
                            Friend.ResetUnreadMessageCount();	// this was an echo of the user's own chat from another device
                        }
                    }
                }
                else
                {
                }
            }

            this.m_message = data.messagelast;
        }
        else
        {
            this.PollFailed();
            return;	//PollFailed will handle failure.
        }

        this.SetOnline( true );

        this.m_cConsecutivePollFailures = 0;
        this.Poll();
    };
    
    /*CWebChatDialog.prototype.RenderChatMessage = function( Sender, timestamp, strMessage, eMessageType )
    {
        $J('#latest').removeAttr("id");
        if ( !eMessageType )
            eMessageType = CWebChat.CHATMESSAGE_TYPE_NORMAL;

        var strMessageClass = 'chat_message';
        if ( eMessageType == CWebChat.CHATMESSAGE_TYPE_HISTORICAL )
            strMessageClass += ' chat_message_historical';
        else if ( eMessageType == CWebChat.CHATMESSAGE_TYPE_SELF || eMessageType == CWebChat.CHATMESSAGE_TYPE_LOCALECHO )
            strMessageClass += ' chat_message_self';
        else if ( eMessageType == CWebChat.CHATMESSAGE_TYPE_SYSTEM )
            strMessageClass += ' chat_message_system';

        var elMessage = $J( '<div/>', {'class': strMessageClass,'id':'latest' } );

        var elTimestamp = $J('<span/>', {'class': 'chat_timestamp' }).text( '[' + timestamp.toLocaleTimeString() + '] ' );

        if ( eMessageType != CWebChat.CHATMESSAGE_TYPE_HISTORICAL && !this.m_Chat.GetPref( 'timestamps' ) )
            elTimestamp.hide();

        elMessage.append( elTimestamp );

        if ( Sender )
        {
            var elName = $J('<span/>', {'class': 'sender persona ' + Sender.GetOnlineState() }).html( Sender.m_strName );
            elMessage.append( elName, ': ' );
        }

        // insert first as text to escape html
        var elText = $J('<span/>', {'class': 'chat_message_text' }).text( strMessage );
        // then format links
        var strHTML = elText.html();
        // links are tested to see if they are from trustworthy domains. Untrusted
        // domains are wrapped with the linkfilter.
        strHTML = strHTML.replace( CWebChatDialog.s_regexLinks, function( match, s1, s2 )
                                  {
            var bTrustedDomain = function()
            {
                if ( s2.match( CWebChatDialog.s_regexValveDomains ) )
                {
                    return true;
                }

                var rgTLDCandidates = s2.match( CWebChatDialog.s_regexDomain );
                if ( !rgTLDCandidates ) {
                    return false;
                }

                for ( var j = CWebChatDialog.m_rgWhitelistedDomains.length - 1; j >= 0; --j )
                {
                    if ( CWebChatDialog.m_rgWhitelistedDomains[j] == rgTLDCandidates[2].toLowerCase() )
                    {
                        return true;
                    }
                }
                return false;
            }();

            if ( bTrustedDomain )
            {
                return ( s1 + '<a href="' + s2 + '" class="whiteLink" target="_blank">' + s2 + '</a>' );
            }
            else
            {
                return ( s1 + '<a href="https://steamcommunity.com/linkfilter/?url=' + s2 + '" class="whiteLink" target="_blank" rel="noreferrer">' + s2 + '</a>' );
            }
        } );

        var regexEmoticons = CWebChatDialog.s_regexEmoticons;
        if ( eMessageType == CWebChat.CHATMESSAGE_TYPE_LOCALECHO && CWebChatDialog.s_regexMyEmoticons )
            regexEmoticons = CWebChatDialog.s_regexMyEmoticons;

        strHTML = strHTML.replace( regexEmoticons, '<img class="emoticon" src="https://steamcommunity-a.akamaihd.net/economy/emoticon/$1">' );

        elText.html( strHTML );

        elMessage.append( elText );
        window.location.hash = '#latest';

        return elMessage;
    };*/
})();
