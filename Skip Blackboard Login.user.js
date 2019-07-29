// ==UserScript==
// @name         Skip Blackboard Login
// @namespace    TomW1605
// @version      0.2
// @description  Skip Blackboard Login
// @author       TomW1605
// @match        https://lms.curtin.edu.au/webapps/login/
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    jQuery("#loginRedirectProviderList > li > a")[0].click()
})();
