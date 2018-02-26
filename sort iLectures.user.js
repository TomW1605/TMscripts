// ==UserScript==
// @name         sort iLectures
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  sort iLectures
// @author       You
// @match        https://echo360.org.au/section/*/home
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".select-typeahead").click();
    $(".active-result")[2].click();
})();
