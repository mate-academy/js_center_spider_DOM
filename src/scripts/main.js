'use strict';

const wallElem = document.querySelector('.wall');
const spiderElem = wallElem.querySelector('.spider');

const spiderLeft = wallElem.clientWidth / 2 - spiderElem.offsetWidth / 2;
const spiderTop = wallElem.clientHeight / 2 - spiderElem.offsetHeight / 2;

spiderElem.style.left = `${spiderLeft}px`;
spiderElem.style.top = `${spiderTop}px`;
