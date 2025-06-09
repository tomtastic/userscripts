// ==UserScript==
// @name         lse.co.uk - Remove Share Chat Filtered Messages
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  Removes every annoying div class
// @author       Tom Matthews
// @include      https://www.lse.co.uk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lse.co.uk
// @downloadURL  https://tomtastic.github.io/userscripts/lse-filter.user.js
// @updateURL    https://tomtastic.github.io/userscripts/lse-filter.user.js
// @grant        none
// @run-at       document-start
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
    const removeFilter = () => {
        classesToRemove.forEach(className => {
            const elements = document.querySelectorAll(`div.${className}`);
            elements.forEach((element) => {
                element.remove();
                console.log(`Removed a div with class: ${className}`);
            });
        });
    };

    // Run immediately and also when DOM changes
    const observer = new MutationObserver(() => {
        removeFilter();
    });

    // Start observing when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        removeFilter();
        observer.observe(document.body, { childList: true, subtree: true });
    });

    // Try to run early in case the element is already present
    if (document.readyState !== 'loading') {
        removeFilter();
    }

})();
