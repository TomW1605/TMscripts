// ==UserScript==
// @name         remove link from plex actor name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove link from plex actor name
// @author       You
// @match        https://app.plex.tv/desktop/
// @icon         https://www.google.com/s2/favicons?domain=plex.tv
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    jQuery.noConflict();

    jQuery("#plex > div.scroll-container.dark-scrollbar > div > div.Page-pageScroller-2xF94-.Scroller-scroller-3Rbtv0.Scroller-none-YejGTY.Scroller-auto-2UYR6N > div.PageContent-pageContentScroller-18TqCp.Scroller-scroller-3Rbtv0.Scroller-vertical-azmSz7.Scroller-auto-2UYR6N > div > div:nth-child(2) > div:nth-child(2) > div > div").children().each(function() {
        jQuery("> div.PrePlayCastList-titleContainer-3hywG- > a", this).removeAttr("href")
        console.log(jQuery("> div.PrePlayCastList-titleContainer-3hywG- > a", this))
    })
})();
