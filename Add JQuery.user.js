// ==UserScript==
// @name         Add JQuery
// @namespace    TomW1605
// @version      0.2
// @description  Add JQuery to all sites you visit if it isen't there already
// @author       TomW1605
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @run-at       context-menu
// @noframes
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// @downloadURL  https://github.com/TomW1605/TMscripts/raw/master/Add%20JQuery.user.js
// @updateURL    https://github.com/TomW1605/TMscripts/raw/master/Add%20JQuery.user.js
// ==/UserScript==

(function() {
    'use strict';

    try {
        console.log('jQuery '+jQuery.fn.jquery+' is already loaded');
        alert('jQuery '+jQuery.fn.jquery+' is already loaded');
    } catch (e) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function () {
            console.log('jQuery '+jQuery.fn.jquery+' has been loaded');
            alert('jQuery '+jQuery.fn.jquery+' has been loaded');
        };
        script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
        document.head.appendChild(script);
    }

})();
