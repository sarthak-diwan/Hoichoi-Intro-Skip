// ==UserScript==
// @name         Hoichoi Intro Skip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       s4r7h4k
// @match        https://www.hoichoi.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hoichoi.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
    function sd(){
        waitForElm('.vjs-control.vjs-skipIntro').then((ele)=>{
        ele.firstChild.click();
        console.log("Intro Skipped");
        var target = document.querySelector('.VideoJS').firstChild;

        var observer = new MutationObserver(function(mutations) {
            console.log("Reloaded");
            sd();
        });

        observer.observe(target, {
            attributes:    true,
            childList:     true,
            characterData: true
        });
        })
    }
    sd();

    // Your code here...
})();
