// ==UserScript==
// @name         bypass steam link filtering
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bypass steam link filtering
// @author       TomW1605
// @match        https://steamcommunity.com/*
// @match        http://steamcommunity.com/*
// @grant        none
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// @downloadURL  https://github.com/TomW1605/TMscripts/raw/master/bypass%20steam%20link%20filtering.user.js
// @updateURL    https://github.com/TomW1605/TMscripts/raw/master/bypass%20steam%20link%20filtering.user.js
// ==/UserScript==

(function() {
    'use strict';

    var els = document.querySelectorAll('a[href^="https://steamcommunity.com/linkfilter/?url="]');
    console.log(els);
    for (var i = 0; i < els.length; i++) {
        els[i].href = els[i].href.replace(/^(https:\/\/steamcommunity\.com\/linkfilter\/\?url=)/,"");
    }
    
    if (document.querySelectorAll('a[href="javascript:Forum_SetTopicsPerPage( 50 );"]').length !== 0 || document.querySelectorAll('a[href="javascript:Forum_SetTopicRepliesPerPage( 50 );"]').length !== 0) {
        if (document.getElementsByClassName('forum_pagesize_options').length > 0) {
            if (document.getElementsByClassName('topic_replies').length > 0) {
                Forum_SetTopicRepliesPerPage(50);
            } else {
                Forum_SetTopicsPerPage(50);
            }
        }
    }

})();
