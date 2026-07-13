'use strict';

const wallEl = document.querySelector('.wall');
const wallWidth = wallEl.clientWidth;
const wallHeight = wallEl.clientHeight;

const spiderEl = document.querySelector('.spider');
const spiderWidth = spiderEl.clientWidth;
const spiderHeight = spiderEl.clientHeight;

const spiderMiddleX = (wallWidth - spiderWidth) / 2;
const spiderMiddleY = (wallHeight - spiderHeight) / 2;

spiderEl.style.left = `${spiderMiddleX}px`;
spiderEl.style.top = `${spiderMiddleY}px`;
