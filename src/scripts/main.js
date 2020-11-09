'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// eslint-disable-next-line no-undef
const styleOfWall = getComputedStyle(wall);
// eslint-disable-next-line no-undef
const styleOfSpider = getComputedStyle(spider);

const wallWidth = parseFloat(styleOfWall.width) / 2;
const wallHeight = parseFloat(styleOfWall.height) / 2;
const spiderWidth = parseFloat(styleOfSpider.width) / 2;
const spiderHeight = parseFloat(styleOfSpider.height) / 2;

const midWidth = wallWidth - spiderWidth;
const midHeight = wallHeight - spiderHeight;

wall.style.display = 'relative';

spider.style.position = 'absolute';
spider.style.top = `${midHeight}px`;
spider.style.left = `${midWidth}px`;
