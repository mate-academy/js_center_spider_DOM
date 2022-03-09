'use strict';

const wall = document.querySelector('.wall');
const styleWall = getComputedStyle(wall);
const spider = document.querySelector('.spider');
const styleSpider = getComputedStyle(spider);
const resultTop = styleWall.width.replace('px', '') / 2
- styleSpider.width.replace('px', '') / 2;
const resultLeft = styleWall.height.replace('px', '') / 2
- styleSpider.height.replace('px', '') / 2;

spider.style.top = `${resultTop}px`;
spider.style.left = `${resultLeft}px`;
