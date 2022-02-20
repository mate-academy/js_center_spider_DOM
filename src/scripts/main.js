'use strict';
// the first way of solving if position absolute is absent

/* const wallElem = document.querySelector('.wall');

wallElem.style.cssText
= 'display: flex; justify-content: center; align-items: center'; */

// the second way of solving

const wallElem = document.querySelector('.wall');
const spiderElem = document.querySelector('.spider');
const spiderTopPosition = parseFloat(wallElem.clientHeight) / 2
- parseFloat(spiderElem.offsetHeight) / 2;
const spiderLeftPosition = parseFloat(wallElem.clientWidth) / 2
- parseFloat(spiderElem.offsetWidth) / 2;

spiderElem.style.top = `${spiderTopPosition}px`;

spiderElem.style.left = `${spiderLeftPosition}px`;
