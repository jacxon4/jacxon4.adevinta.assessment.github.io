(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{123:function(t,n,e){t.exports=e(312)},312:function(t,n,e){"use strict";e.r(n);e(88),e(126);var c="is-expanded",o="Accordion",r="itemTerm",i="itemDescription",u=function(t,n){var e=t.querySelectorAll("dt");function u(t){t.addEventListener("click",(function(t){return function(t){a(t.target)}(t)}))}function a(t){e.forEach((function(t){return t.nextElementSibling.classList.remove(c)})),t.nextElementSibling.classList.toggle(c)}function d(t){t.classList.add(o),e.forEach((function(t){t.classList.add("".concat(o,"-").concat(r)),t.nextElementSibling.classList.add("".concat(o,"-").concat(i))}))}return void 0!==e&&(d(t),e.forEach((function(t){return u(t)})),null!==n&&a(e[n])),{addItems:function(n){n.forEach((function(n){return function(n){var e=document.createElement("dt"),c=document.createTextNode(n.term);e.appendChild(c),u(e),t.appendChild(e);var o=document.createElement("dd"),r=document.createElement("p"),i=document.createTextNode(n.description);r.appendChild(i),o.appendChild(r),t.appendChild(o)}(n)})),e=t.querySelectorAll("dt"),d(t)}}},a="GET",d=function(t){throw t},l=(e(91),function(){return function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=function(t,n){var e={headers:{"Content-Type":"application/json",Accept:"*/*"},method:t};return null!==n&&(e.body=JSON.stringify(n)),e};return fetch(t,c(n,e)).then((function(t){if(200===t.status||201===t.status)return t.json();throw new Error("".concat(t.status," : ").concat(t.statusText))})).catch(d)}("https://jacxon4.github.io/jacxon4.adevinta.assessment.github.io/db.json",a).then((function(t){return function(t){return t.map((function(t){return{term:t.title,description:t.content}}))}(t)})).catch((function(t){throw t}))});!function(t){var n=document.getElementById(t);if(null!==n){var e=n.querySelector("dl");if(null!==e){var c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return u(t,n)}(e);l().then((function(t){return c.addItems(t)}))}}}("root")}},[[123,4,1,0]]]);