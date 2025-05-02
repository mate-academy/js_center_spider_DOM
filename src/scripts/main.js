'use strict';

const wallEl = document.querySelector('.wall');
const spiderEl = document.querySelector('.spider');

const wallWidth = wallEl.clientWidth;
const wallHeight = wallEl.clientHeight;

const spiderWidth = spiderEl.clientWidth;
const spiderHeight = spiderEl.clientHeight;

const spiderLeftPosition = wallWidth / 2 - spiderWidth / 2;
const spiderTopPosition = wallHeight / 2 - spiderHeight / 2;

spiderEl.style.left = `${spiderLeftPosition}px`;
spiderEl.style.top = `${spiderTopPosition}px`;
