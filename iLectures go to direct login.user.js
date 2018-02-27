// ==UserScript==
// @name         iLectures go to direct login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  iLectures go to direct login
// @author       You
// @match        https://login.echo360.org.au/login*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('a[href="https://echo360.org.au/directLogin"]')[0].click();
})();
