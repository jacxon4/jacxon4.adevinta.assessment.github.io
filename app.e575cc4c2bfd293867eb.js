(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{122:function(n,t,e){n.exports=e(312)},312:function(n,t,e){"use strict";e.r(t);e(88),e(125);var i="is-expanded",o=function(n,t){var e=n.querySelectorAll("dt");function o(n){e.forEach((function(n){return n.nextElementSibling.classList.remove(i)})),n.nextElementSibling.classList.toggle(i)}void 0!==e&&(n.classList.add("Accordion"),e.forEach((function(n){n.classList.add("Accordion-itemTerm"),n.nextElementSibling.classList.add("Accordion-itemDescription")})),e.forEach((function(n){return function(n){n.addEventListener("click",(function(n){return function(n){o(n.target)}(n)}))}(n)})),null!==t&&o(e[t]))};({render:function(n){return function(t){var e=n.getElementById(t).querySelector("dl");e&&function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;o(n,t)}(e)}}(document)}).render("root")}},[[122,4,1,0]]]);