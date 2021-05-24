'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const styleWall = getComputedStyle(wall);
const widthWall = parseFloat(styleWall.width);
const heightWall = parseFloat(styleWall.height);

const styleSpider = getComputedStyle(spider);
const widthSpider = parseFloat(styleSpider.width);
const heightSpider = parseFloat(styleSpider.height);

spider.style.marginTop = (widthWall - widthSpider) / 2 + 'px';
spider.style.marginBottom = (widthWall - widthSpider) / 2 + 'px';
spider.style.marginLeft = (heightWall - heightSpider) / 2 + 'px';
spider.style.marginRight = (heightWall - heightSpider) / 2 + 'px';
