'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const styleWall = getComputedStyle(wall);
const styleSpider = getComputedStyle(spider);

const wallHeight = parseFloat(styleWall.height);
const spiderHeight = parseFloat(styleSpider.height);

const wallWidth = parseFloat(styleWall.width);
const spiderWidth = parseFloat(styleSpider.width);

const positionY = `${(wallHeight / 2) - (spiderHeight / 2)}px`;
const positionX = `${(wallWidth / 2) - (spiderWidth / 2)}px`;

spider.style.top = positionY;
spider.style.left = positionX;
