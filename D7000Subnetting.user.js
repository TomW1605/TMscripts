// ==UserScript==
// @name         D7000Subnetting
// @namespace    TomW1605
// @version      0.1
// @description  Enamble subnetting on D7000 IP resuervation page
// @author       TomW1605
// @match        http://192.168.0.1/*
// @grant        none
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    jQuery.noConflict();
    jQuery('input[name="rsv_ip3"]').removeAttribute('disabled')
})();
