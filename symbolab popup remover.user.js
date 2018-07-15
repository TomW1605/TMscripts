// ==UserScript==
// @name         symbolab popup remover
// @namespace    TomW1605
// @version      0.2
// @description  removes the popup symbolab shows after it has calculated the resault
// @author       TomW1605
// @match        https://www.symbolab.com/*
// @grant        none
// @run-at       document-idle
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    function waitForEl(selector, callback){
        var poller1 = setInterval(function(){
            var jObject = jQuery(selector);
            if(jObject.length < 1){
                return;
            }
            clearInterval(poller1);
            callback(jObject);
        },100);
    }

    waitForEl("[id^=tooltipster-] > div.tooltipster-box > div > div > a", function() {
        $("[id^=tooltipster-] > div.tooltipster-box > div > div > a")[0].click();
    });

    waitForEl('.showStepsButton, .locked-step', function() {
        while ($('.showStepsButton, .locked-step').length != 0) {
            $('.showStepsButton').parent().parent().click();
            $('.locked-step').addClass('showStepsButton');
            $('.locked-step').removeClass('locked-step');
        }
        $('.hideStepsButton').parent().parent().click();
    });
})();
