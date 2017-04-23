// ==UserScript==
// @name         Unlock A+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  unlockes the A+ content on litcharts
// @author       You
// @match        http://www.litcharts.com/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
    $('.blurred-text').removeClass('blurred-text');
    $('.blurred').removeClass('blurred');
    $('.btn-blurred').removeClass('btn-blurred');
    $('.a-plus').remove();
})();
