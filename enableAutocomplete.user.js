// ==UserScript==
// @name         enableAutocomplete
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  removes the Autocomplete="off" from forum inputs
// @author       TomW1605
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @supportURL   https://github.com/TomW1605/TMscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    function enableAutocomplete()
    {
        var snapshot = document.evaluate('//@autocomplete',
                                         document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null),
            numItems = snapshot.snapshotLength - 1;

        for (var i = numItems; i >= 0; i--)
            snapshot.snapshotItem(i).nodeValue = 'on';
    }
    window.addEventListener('DOMContentLoaded', enableAutocomplete, false);

})();
