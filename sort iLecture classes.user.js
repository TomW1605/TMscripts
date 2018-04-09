// ==UserScript==
// @name         sort iLecture classes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  sort iLecture classes
// @author       TomW1605
// @match        https://echo360.org.au/home
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".home-content-main").children().each(function(i,li){
        $(".home-content-main").prepend(li);
    });
})();
