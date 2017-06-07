// ==UserScript==
// @name         Unlock A+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  unlockes the A+ content on litcharts
// @author       You
// @match        http://www.litcharts.com/*
// @grant        none
// @downloadURL  https://github.com/TomW1605/TMscripts/raw/master/Unlock%20A+.user.js
// @updateURL    https://github.com/TomW1605/TMscripts/raw/master/Unlock%20A+.user.js
// ==/UserScript==
 
(function() {
    'use strict';
 
    $('.blurred-text').removeClass('blurred-text');
    $('.blurred').removeClass('blurred');
    $('.btn-blurred').removeClass('btn-blurred');
    $('.a-plus').remove();
})();
