// ==UserScript==
// @name            Youtube: Space to Pause
// @description     Bind the spacebar to play/pause the video.
// @author          Chris H (Zren)
// @icon            https://youtube.com/favicon.ico
// @namespace       http://xshade.ca
// @version         1
// @include         http*://*.youtube.com/*
// @include         http*://youtube.com/*
// @include         http*://*.youtu.be/*
// @include         http*://youtu.be/*
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// @downloadURL  https://github.com/TomW1605/TMscripts/raw/master/Youtube%3A%20Space%20to%20Pause.user.js
// @updateURL    https://github.com/TomW1605/TMscripts/raw/master/Youtube%3A%20Space%20to%20Pause.user.js
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
