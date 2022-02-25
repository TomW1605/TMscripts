// ==UserScript==
// @name         tidy blackboard unit list
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  tidy blackboard unit list
// @author       TomW1605
// @match        https://lms.curtin.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_84_1*
// @match        https://lms.curtin.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_3_1#*
// @match        https://lms.curtin.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_3_1*
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    jQuery.noConflict();

    //2017
    jQuery("a:contains(' (Semester 1 2017 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 1 2017 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });
    jQuery("a:contains(' (Semester 2 2017 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 2 2017 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });

    //2018
    jQuery("a:contains(' (Semester 1 2018 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 1 2018 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });
    jQuery("a:contains(' (Semester 2 2018 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 2 2018 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });

    //2019
    jQuery("a:contains(' (Semester 1 2019 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 1 2019 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });
    jQuery("a:contains(' (Semester 2 2019 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 2 2019 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });

    //2020
    jQuery("a:contains(' (Semester 1 2020 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 1 2020 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });
    jQuery("a:contains(' (Semester 2 2020 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 2 2020 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });

    //2021
    jQuery("a:contains(' (Semester 1 2021 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 1 2021 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });
    jQuery("a:contains(' (Semester 2 2021 Bentley Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 2 2021 Bentley Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });

    //2022
    jQuery("a:contains(' (Semester 1 2022 Bentley Perth Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 1 2022 Bentley Perth Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });
    jQuery("a:contains(' (Semester 2 2022 Bentley Perth Campus - INT[1])')").text(function(index, text) {
        var newText = text.replace(" (Semester 2 2022 Bentley Perth Campus - INT[1])", "");
        console.log(newText);
        return newText;
    });

})();
