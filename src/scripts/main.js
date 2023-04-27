'use strict';

const wall = document.querySelector('.wall');

const styleWall = getComputedStyle(wall);
const widthWall = parseFloat(styleWall.width);
const heightWall = parseFloat(styleWall.height);

const spider = document.querySelector('.spider');

const styleSpider = getComputedStyle(spider);
const widthSpider = parseFloat(styleSpider.width);
const heightSpider = parseFloat(styleSpider.height);

spider.style.top = `${heightWall / 2 - heightSpider / 2}px`;
spider.style.left = `${widthWall / 2 - widthSpider / 2}px`;
