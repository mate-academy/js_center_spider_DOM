'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const styleWall = getComputedStyle(wall);
const styleSpider = getComputedStyle(spider);

const wallSize = styleWall.height;
const spiderSize = styleSpider.height;

spider.style.top
= `${(parseFloat(wallSize) / 2) - (parseFloat(spiderSize) / 2)}px`;
spider.style.left = spider.style.top;
