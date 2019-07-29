// ==UserScript==
// @name         Skip Curtin SSO
// @namespace    TomW1605
// @version      0.3
// @description  Skip Curtin SSO
// @author       TomW1605
// @match        https://sso.curtin.edu.au/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var numIntervals = 0;
    var pwFilledTimer = setInterval(function() {
        var usrNameInp = document.getElementById("idToken1");
        if (usrNameInp && usrNameInp.value != "") {

            var passWrdInp = document.getElementById("idToken2");
            if (passWrdInp && passWrdInp.value != "") {

                clearInterval(pwFilledTimer);

                var submitButton = document.getElementById("loginButton_0");
                var clickEvent = document.createEvent('MouseEvents');
                clickEvent.initEvent('click', true, true);
                submitButton.dispatchEvent(clickEvent);
            }
        }
        numIntervals++;
        if (numIntervals > 30) {
            clearInterval(pwFilledTimer);
        }
    },200);
})();
