'use strict';

const divElem = document.querySelector('.wall');
const spiderElem = document.querySelector('.spider');
const widthDivElem = divElem.clientWidth;
const heightDivElem = divElem.clientHeight;
const widthSpiderElem = spiderElem.clientWidth;
const heightSpiderElem = spiderElem.clientHeight;

spiderElem.style.top = `${(heightDivElem - heightSpiderElem) / 2}px`;
spiderElem.style.left = `${(widthDivElem - widthSpiderElem) / 2}px`;
