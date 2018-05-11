// ==UserScript==
// @name         Download Youtube Part 2
// @version      0.1
// @description  Download Youtube Part 2
// @author       TomW1605
// @match        https://*.googlevideo.com/videoplayback?*
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    jQuery.noConflict();

    if(window.location.hash) {
        var tytle = decodeURI(window.location.hash.substr(1));
        var url = window.location.href.split("#")[0];
        jQuery('<a/>',{"href":url, "download":tytle+".mp4", id:"videoDownloadLink"}).appendTo(document.body);
        jQuery('#videoDownloadLink').get(0).click();
        alert("Your vidio should start downloading shortly");
        window.close();
    }
})();
