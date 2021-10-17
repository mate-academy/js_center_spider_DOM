'use strict';

// write code here
const spider = document.querySelector('.spider');
const spiderStyle = getComputedStyle(spider);
const wall = document.querySelector('.wall');
const wallStyle = getComputedStyle(wall);

const heightWall = parseFloat(wallStyle.height);
const widthWall = parseFloat(wallStyle.width);
const widthSpider = parseFloat(spiderStyle.width);
const heightSpider = parseFloat(spiderStyle.height);

spider.style.top = `${(heightWall - heightSpider) / 2}px`;
spider.style.left = `${(widthWall - widthSpider) / 2}px`;
