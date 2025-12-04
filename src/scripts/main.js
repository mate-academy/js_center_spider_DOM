'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallStyle = getComputedStyle(wall);
const borderWidth = parseFloat(wallStyle.borderTopWidth);
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();
const topCenter = (wallRect.height - spiderRect.height - borderWidth * 2) / 2;
const leftCenter = (wallRect.width - spiderRect.width - borderWidth * 2) / 2;

spider.style.top = topCenter + 'px';
spider.style.left = leftCenter + 'px';
