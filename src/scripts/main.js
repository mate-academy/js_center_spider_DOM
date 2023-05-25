'use strict';

const divElem = document.querySelector('.wall');
const spiderElem = document.querySelector('.spider');

const wigthDivElem = divElem.clientWidth;
const heightDivElem = divElem.clientHeight;

const wigthSpiderElem = spiderElem.clientWidth;
const heighSpiderElem = spiderElem.clientHeight;

spiderElem.style.top = `${(heightDivElem - heighSpiderElem) / 2}px`;
spiderElem.style.left = `${(wigthDivElem - wigthSpiderElem) / 2}px`;
