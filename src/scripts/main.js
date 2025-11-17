'use strict';

const wallElem = document.querySelector('.wall');
const spiderElem = wallElem.querySelector('.spider');

const wallCoords = wallElem.getBoundingClientRect();

const spiderCoords = spiderElem.getBoundingClientRect();

const wallLeft = (wallCoords.width - spiderCoords.width) / 2;

const wallTop = (wallCoords.height - spiderCoords.height) / 2;

spiderElem.style.top = wallTop + 'px';
spiderElem.style.left = wallLeft + 'px';
