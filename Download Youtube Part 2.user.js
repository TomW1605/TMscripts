// ==UserScript==
// @name         Download Youtube Part 2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download Youtube Part 2
// @author       TomW1605
// @match        https://*.googlevideo.com/videoplayback?*
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.hash) {
        var tytle = decodeURI(window.location.hash.substr(1));
        var url = window.location.href.split("#")[0];
        $('<a/>',{"href":url, "download":tytle+".mp4", id:"videoDownloadLink"}).appendTo(document.body);
        $('#videoDownloadLink').get(0).click();
        alert("Your vidio should start downloading shortly");
        window.close();
    }
})();
