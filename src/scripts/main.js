'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const borderTop = parseInt(getComputedStyle(wall).borderTopWidth);
const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth);

const x = (wallWidth - spiderWidth) / 2 - borderLeft;
const y = (wallHeight - spiderHeight) / 2 - borderTop;

spider.style.top = `${y}px`;
spider.style.left = `${x}px`;
