// ==UserScript==
// @name         D7000Subnetting
// @namespace    TomW1605
// @version      0.3
// @description  Enamble subnetting on D7000 IP resuervation page
// @author       TomW1605
// @match        http://192.168.0.1/*
// @grant        none
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByName("rsv_ip3").forEach(function(item){item.disabled=false})
})();
