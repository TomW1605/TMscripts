// ==UserScript==
// @name         bypass steam link filtering
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bypass steam link filtering
// @author       TomW1605
// @match        https://steamcommunity.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var els = document.querySelectorAll('a[href^="https://steamcommunity.com/linkfilter/?url="]');
    console.log(els);
    for (var i = 0; i < els.length; i++) {
        els[i].href = els[i].href.replace(/^(https:\/\/steamcommunity\.com\/linkfilter\/\?url=)/,"");
    }

})();
