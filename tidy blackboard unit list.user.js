// ==UserScript==
// @name         tidy blackboard unit list
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  tidy blackboard unit list
// @author       TomW1605
// @match        https://lms.curtin.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_84_1
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    jQuery.noConflict();
    jQuery("a:contains(' (Semester 1 2018 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 1 2018 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });
})();
