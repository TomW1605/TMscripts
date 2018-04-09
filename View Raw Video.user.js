// ==UserScript==
// @name         View Raw Video
// @version      0.1
// @description  View Raw Video
// @author       TomW1605
// @include      http*://*.youtube.com/*
// @include      http*://youtube.com/*
// @include      http*://*.youtu.be/*
// @include      http*://youtu.be/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var video = ytplayer.config.args.url_encoded_fmt_stream_map.split(",")[0].split("&");
    var info = {};
    for (var i in video) {
        var temp = video[i].split("=");
        info[temp[0]] = decodeURIComponent(temp[1]);
    }
    var url = info.url;
    window.open(url,'_blank');
})();
