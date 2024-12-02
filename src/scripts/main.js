'use strict';

const spiderEl = document.querySelector('img.spider');

const wallSize = 400;
const spiderSize = 50;

const topPosition = (wallSize - spiderSize) / 2;
const leftPosition = (wallSize - spiderSize) / 2;

spiderEl.style.top = `${topPosition}px`;
spiderEl.style.left = `${leftPosition}px`;
