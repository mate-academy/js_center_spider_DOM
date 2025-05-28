'use strict';

const wall = document.querySelector('.wall');
const wallHeight = wall.offsetHeight;
const wallWidth = wall.offsetWidth;
const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10) || 0;
const spider = document.querySelector('.spider');
const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;

spider.style.left = `${(wallWidth - spiderWidth) / 2 - wallBorder}px`;
spider.style.top = `${(wallHeight - spiderHeight) / 2 - wallBorder}px`;
