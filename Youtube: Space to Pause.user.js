// ==UserScript==
// @name            Youtube: Space to Pause
// @description     Bind the spacebar to play/pause the video.
// @author          TomW1605
// @icon            https://youtube.com/favicon.ico
// @namespace       TomW1605
// @version         1
// @include         http*://*.youtube.com/*
// @include         http*://youtube.com/*
// @include         http*://*.youtu.be/*
// @include         http*://youtu.be/*
// @supportURL      https://github.com/TomW1605/TMscripts/issues
// ==/UserScript==

var k = function(action){
    var eventObj = document.createEvent("Events");

    eventObj.initEvent("keydown", true, true);
    eventObj.keyCode = 75;
    eventObj.which = 75;

    document.body.dispatchEvent(eventObj);
};

window.addEventListener('keydown', function(e) {
    var playButton = document.querySelector('button.ytp-play-button');
    var isKey = e.keyCode === 32; // Space
    var validTarget = e.target === document.body || e.target === document.querySelector('#player-api');
    if (validTarget && isKey && playButton) {
        e.preventDefault();
        //playButton.click();
        k();
    }
});
