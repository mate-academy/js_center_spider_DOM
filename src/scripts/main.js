'use strict';

const divElem = document.querySelector('.wall');
const spiderElem = document.querySelector('.spider');

const wigthdivElem = divElem.clientWidth;
const heightdivElem = divElem.clientHeight;

spiderElem.style.top = `${heightdivElem * 0.5 - 25}px`;
spiderElem.style.left = `${wigthdivElem * 0.5 - 25}px`;
