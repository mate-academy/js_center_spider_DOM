'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;

const widthSpider = spider.clientWidth;
const heightSpider = spider.clientWidth;

spider.style.cssText = `top: ${widthWall / 2 - heightSpider / 2}px;
 left: ${heightWall / 2 - widthSpider / 2}px`;
