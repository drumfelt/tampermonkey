// ==UserScript==
// @name         Auto-click like button on youtube playlist queue
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==

const ONE_MINUTE = 60000;

function clickLikeButton() {
    setTimeout(() => {
        const likeButton = document.querySelector('#menu #top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1), #segmented-like-button button');
        if (likeButton && likeButton.attributes['aria-pressed'].value === 'false' ) {
            likeButton.click();
        }

        clickLikeButton();
    }, ONE_MINUTE);
}

(function() {
    'use strict';
    clickLikeButton();
})();