'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const computedStyle = getComputedStyle(wall);
const borderSize = parseFloat(computedStyle.borderWidth) || 0;

const wallWidth = wallRect.width - borderSize * 2;
const wallHeight = wallRect.height - borderSize * 2;

const centerX = (wallWidth - spiderRect.width) / 2 + borderSize;
const centerY = (wallHeight - spiderRect.height) / 2 + borderSize;

spider.style.position = 'absolute';
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
