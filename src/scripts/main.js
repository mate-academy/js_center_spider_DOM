'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const styleSpider = getComputedStyle(spider);
const styleWall = getComputedStyle(wall);
const topPos = (parseFloat(styleWall.height) - 
parseFloat(styleSpider.height)) / 2;
const leftPos = (parseFloat(styleWall.width) - 
parseFloat(styleSpider.width)) / 2;

spider.style.top = `${topPos}px`;
spider.style.left = `${leftPos}px`;
