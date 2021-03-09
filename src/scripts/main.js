'use strict';

const spiderImg = document.querySelector('.spider');

const wall = document.querySelector('.wall');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spiderImg.clientWidth;
const spiderHeight = spiderImg.clientHeight;

const centeredSpiderX = ((wallWidth - spiderWidth) / 2);
const centeredSpiderY = ((wallHeight - spiderHeight) / 2);

spiderImg.style.top = `${centeredSpiderY}px`;
spiderImg.style.left = `${centeredSpiderX}px`;
