// ==UserScript==
// @name         enableAutocomplete
// @namespace    TomW1605
// @version      1
// @description  changes the autocomplete="off" on forum inputs to autocomplete="on"
// @author       TomW1605
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    jQuery.noConflict();
    jQuery(function(){jQuery('input[autocomplete="off"]').attr("autocomplete", "on");});

})();
