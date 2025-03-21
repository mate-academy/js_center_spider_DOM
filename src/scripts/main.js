'use strict';

const spider = document.querySelector('.spider');
const styleSpider = getComputedStyle(spider);

const wall = document.querySelector('.wall');
const styleWall = getComputedStyle(wall);

spider.style.top = `${(parseInt(styleWall.height) - parseInt(styleSpider.height)) / 2}px`;
spider.style.left = `${(parseInt(styleWall.width) - parseInt(styleSpider.width)) / 2}px`;
