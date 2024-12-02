'use strict';

// write code here

const wallEl = document.querySelector('div');
const spiderEl = document.querySelector('img');

spiderEl.style.top = `${wallEl.clientHeight / 2 - spiderEl.clientHeight / 2}px`;
spiderEl.style.left = `${wallEl.clientWidth / 2 - spiderEl.clientWidth / 2}px`;
