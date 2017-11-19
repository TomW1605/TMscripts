// ==UserScript==
// @name         Unlock A+
// @namespace    TomW1605
// @version      1
// @description  unlockes the A+ content on litcharts
// @author       TomW1605
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
