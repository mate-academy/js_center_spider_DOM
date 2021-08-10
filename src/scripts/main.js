'use strict';

const spiderImg = document.querySelector('.spider');
const wallImg = document.querySelector('.wall');

const wallSize = wallImg.clientHeight;
const spiderSize = spiderImg.clientHeight;

spiderImg.style.top = `${(wallSize - spiderSize) / 2}px`;
spiderImg.style.left = `${(wallSize - spiderSize) / 2}px`;
