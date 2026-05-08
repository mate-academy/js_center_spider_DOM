'use strict';

// write code here
const spiderEl = document.querySelector('.spider');
const wallEl = document.querySelector('.wall');
const leftWidth = (wallEl.clientWidth - spiderEl.offsetWidth) / 2;
const topHeigth = (wallEl.clientHeight - spiderEl.offsetHeight) / 2;

spiderEl.style.left = leftWidth + 'px';
spiderEl.style.top = topHeigth + 'px';
