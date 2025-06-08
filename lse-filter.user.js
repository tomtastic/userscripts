// ==UserScript==
// @name         lse.co.uk - Remove Share Chat Filtered Messages
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @description  Removes several annoying div classes
// @author       Tom Matthews
// @include      https://www.lse.co.uk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lse.co.uk
// @downloadURL  https://tomtastic.github.io/userscripts/lse-filter.user.js
// @updateURL    https://tomtastic.github.io/userscripts/lse-filter.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of classes to remove from divs
    const classesToRemove = [
        // Add more classes here if needed
        'share-chat-filtered-message',
        'sp-nav-sponsorship-ad',
        'sp-incontent-ad',
        'banner-ads',
        'header__ad-container',
        'header__logo',
        'placement-col'
    ];

    // Function to remove all div elements with the specified classes
    const removeFilteredMessages = () => {
        classesToRemove.forEach(className => {
            const elements = document.querySelectorAll(`div.${className}`);
            elements.forEach((element) => {
                element.remove();
                console.log(`Removed a div with class: ${className}`);
            });
        });
    };

    // Run the removal function when the page is fully loaded
    window.addEventListener('load', () => {
        removeFilteredMessages();
    });

    // Optionally, observe for dynamically added content
    const observer = new MutationObserver(() => {
        removeFilteredMessages();
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
