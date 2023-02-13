// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://gatech.instructure.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instructure.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(()=>{
        let assignments = Array.from(document.getElementsByClassName("ig-details__item assignment-date-available"));
        assignments.forEach(assignment => {assignment.style.display = 'none'})
    },3000)

})();