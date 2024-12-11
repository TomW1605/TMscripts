// ==UserScript==
// @name         underline advent of code easter eggs
// @namespace    TomW1605
// @version      1.0
// @description  underline advent of code easter eggs
// @author       TomW1605
// @match        https://adventofcode.com/*/day/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=adventofcode.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector("article > p > span").style.textDecoration = "underline"
})();
