// ==UserScript==
// @name         Download Youtube
// @version      0.1
// @description  Download Youtube
// @author       TomW1605
// @include      http*://*.youtube.com/*
// @include      http*://youtube.com/*
// @include      http*://*.youtu.be/*
// @include      http*://youtu.be/*
// @grant        GM_download
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    var video = ytplayer.config.args.url_encoded_fmt_stream_map.split(",")[0].split("&");
    var info = {};
    for (var i in video) {
        var temp = video[i].split("=");
        info[temp[0]] = decodeURIComponent(temp[1]);
    }
    GM_download(info.url, ytplayer.config.args.title);
})();
