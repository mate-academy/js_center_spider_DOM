'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const styleWall = getComputedStyle(wall);
const styleSpider = getComputedStyle(spider);

const widthWall = parseFloat(styleWall.width);
const heightWall = parseFloat(styleWall.height);
const widthSpider = parseFloat(styleSpider.width);
const heightSpider = parseFloat(styleSpider.height);

spider.style.top = `${(heightWall - heightSpider) / 2}px`;
spider.style.left = `${(widthWall - widthSpider) / 2}px`;
