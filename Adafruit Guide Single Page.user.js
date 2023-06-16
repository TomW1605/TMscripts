// ==UserScript==
// @name         Adafruit Guide Single Page
// @namespace    TomW1605
// @version      1
// @description  make the Adafruit guide always show as single page
// @author       TomW1605
// @run-at       document-start
// @match        https://learn.adafruit.com/*
// @exclude      https://learn.adafruit.com/category/*
// @exclude      https://learn.adafruit.com/guides/*
// ==/UserScript==

(function() {
    'use strict';
    //console.log(window.location);
    var newURL = window.location.href;
    if(window.location.search=="") {
        newURL = window.location.origin + window.location.pathname + "?view=all" + window.location.hash;
    } else if(!window.location.search.includes("view")){
        newURL = window.location.origin + window.location.pathname + window.location.search + "&view=all" + window.location.hash;
    }

    if (newURL!=window.location.href){
        //console.log(newURL);
        window.location.replace(newURL);
    }
})();
