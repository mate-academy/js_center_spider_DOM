'use strict';

const wallElem = document.querySelector('.wall');
const spiderElem = wallElem.querySelector('.spider');

const spiderLeft = wallElem.clientWidth / 2 - spiderElem.clientWidth / 2;
const spiderTop = wallElem.offsetHeight / 2 - spiderElem.offsetHeight / 2;

spiderElem.style.left = `${spiderLeft}px`;
spiderElem.style.top = `${spiderTop}px`;
