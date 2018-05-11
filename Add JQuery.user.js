// ==UserScript==
// @name         Add JQuery
// @namespace    TomW1605
// @version      1
// @description  Add JQuery to all sites you visit if it isen't there already
// @author       TomW1605
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @run-at       context-menu
// @noframes
// @supportURL   https://github.com/TomW1605/TMscripts/issues
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
            jQuery.noConflict();
            console.log('jQuery '+jQuery.fn.jquery+' has been loaded as "jQuery"');
            alert('jQuery '+jQuery.fn.jquery+' has been loaded as "jQuery"');
        };
        script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
        document.head.appendChild(script);
    }

})();
