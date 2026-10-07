'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const wallBorder = parseFloat(window.getComputedStyle(wall).borderTopWidth);

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.top = (wallHeight - spiderHeight) / 2 - wallBorder + 'px';
spider.style.left = (wallWidth - spiderWidth) / 2 - wallBorder + 'px';
