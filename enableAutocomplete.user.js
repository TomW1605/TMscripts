// ==UserScript==
// @name         enableAutocomplete
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  changes the autocomplete="off" on forum inputs to autocomplete="on"
// @author       TomW1605
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// @require https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(function(){$('input[autocomplete="off"]').attr("autocomplete", "on")})

})();
