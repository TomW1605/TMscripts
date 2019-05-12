// ==UserScript==
// @name         Altronics website fix
// @namespace    TomW1605
// @version      2.0
// @description  fix the sorting and the number of items per page showne on the altronics site
// @author       TomW1605
// @run-at       document-start
// @match        https://www.altronics.com.au/audio-visual/*/*
// @match        https://www.altronics.com.au/pro-audio/*/*
// @match        https://www.altronics.com.au/speakers/*/*
// @match        https://www.altronics.com.au/security/*/*
// @match        https://www.altronics.com.au/test-measurement/*/*
// @match        https://www.altronics.com.au/tools/*/*
// @match        https://www.altronics.com.au/computers/*/*
// @match        https://www.altronics.com.au/projects/*/*
// @match        https://www.altronics.com.au/greenenergy-lighting/*/*
// @match        https://www.altronics.com.au/power-supplies/*/*
// @match        https://www.altronics.com.au/transformers/*/*
// @match        https://www.altronics.com.au/hardware/*/*
// @match        https://www.altronics.com.au/electronic-components/*/*
// @match        https://www.altronics.com.au/switches/*/*
// @match        https://www.altronics.com.au/connectors/*/*
// @match        https://www.altronics.com.au/cable/*/*
// @match        https://www.altronics.com.au/books/*/*
// @match        https://www.altronics.com.au/search/*
// @match        https://www.altronics.com.au/specials/*
// @match        https://www.altronics.com.au/new/*
// ==/UserScript==

(function() {
    'use strict';
    //console.log(window.location);
    var newURL = window.location.href;
    if(newURL=="https://www.altronics.com.au/specials/") {
        newURL = window.location.origin + window.location.pathname + "?srt=9&pz=64" + window.location.hash;
    } else {
        if(window.location.search=="") {
            newURL = window.location.origin + window.location.pathname + "?srt=1&pz=64" + window.location.hash;
        } else if(window.location.search.includes("srt") && window.location.search.includes("pz")){
            newURL = window.location.origin + window.location.pathname + window.location.search + window.location.hash;
        } else if(window.location.search.includes("srt") && !window.location.search.includes("pz")){
            newURL = window.location.origin + window.location.pathname + window.location.search + "&pz=64" + window.location.hash;
        } else if(!window.location.search.includes("srt") && window.location.search.includes("pz")){
            newURL = window.location.origin + window.location.pathname + window.location.search + "&srt=1" + window.location.hash;
        } else if(!window.location.search.includes("srt") && !window.location.search.includes("pz")){
            newURL = window.location.origin + window.location.pathname + window.location.search + "&srt=1&pz=64" + window.location.hash;
        }
    }
    if (newURL!=window.location.href){
        //console.log(newURL);
        window.location.replace(newURL);
    }
})();
