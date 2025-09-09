// ==UserScript==
// @name         lse.co.uk - Remove Share Chat Filtered Messages
// @namespace    http://tampermonkey.net/
// @version      0.2.6
// @description  Removes every annoying div/ul class
// @author       Tom Matthews
// @include      https://www.lse.co.uk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lse.co.uk
// @downloadURL  https://raw.githubusercontent.com/tomtastic/userscripts/refs/heads/main/lse-filter.user.js
// @updateURL    https://raw.githubusercontent.com/tomtastic/userscripts/refs/heads/main/lse-filter.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // List of classes to remove from divs
    // We ditch a bunch of advertising, because we can
    const classesToRemove = [
        // Add more classes here if needed
        'share-chat-filtered-message',
        'sp-nav-sponsorship-ad',
        'sp-nav-mobile-leaderboard-ad',
        'message-overlay',
        'social-bar',
        'sp-main-info__delayed-upsell',
        'sp-incontent-ad',
        'banner-ads',
        'header__ad-container',
        'header__logo',
        'placement-col',
        'footer__column--offer',
        'footer__disclaimer'
    ];
    const UlToRemove = [
        // Add more ul here if needed
        'sp-action-nav'
    ];
    // Function to remove all div elements with the specified classes
    const removeClassFilter = () => {
        classesToRemove.forEach(className => {
            const elements = document.querySelectorAll(`div.${className}`);
            elements.forEach((element) => {
                element.remove();
                console.log(`Removed a div with class: ${className}`);
            });
        });
    };
    const removeUlFilter = () => {
        UlToRemove.forEach(className => {
            const elements = document.querySelectorAll(`ul.${className}`);
            elements.forEach((element) => {
                element.remove();
                console.log(`Removed a ul with class: ${className}`);
            });
        });
    };
    // Run immediately and also when DOM changes
    const observer = new MutationObserver(() => {
        removeClassFilter();
        removeUlFilter();
    });

    // Start observing when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        removeClassFilter();
        removeUlFilter();
        observer.observe(document.body, { childList: true, subtree: true });
    });

    // Try to run early in case the element is already present
    if (document.readyState !== 'loading') {
        removeClassFilter();
        removeUlFilter();
    }

})();
