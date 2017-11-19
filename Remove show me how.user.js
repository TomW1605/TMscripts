// ==UserScript==
// @name         Remove "show me how"
// @namespace    TomW1605
// @version      1
// @description  Remove the anoying "show me how" button from cpanel
// @author       TomW1605
// @match        https://*/cpsess*/*
// @noframes
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @downloadURL  https://github.com/TomW1605/TMscripts/raw/master/Remove%20show%20me%20how.user.js
// @updateURL    https://github.com/TomW1605/TMscripts/raw/master/Remove%20show%20me%20how.user.js
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements ('#cpanel_body > div.SkipThisFixedPosition.walkme-custom-icon-outer-div.walkme-launcher-id-37995.walkme-custom-launcher-outer-div.walkme-text-launcher.custom-launcher-27572.walkme-icon-root-Launcher-37995.walkme-not-embed', function(el) {
        console.log(el[0]);
        el[0].parentNode.removeChild(el[0]);
    });
})();
