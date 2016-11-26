// ==UserScript==
// @name         Add JQuery
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add JQuery to all sites you visit
// @author       TomW1605
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
    document.head.appendChild(script);
})();
