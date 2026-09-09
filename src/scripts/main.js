'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const widthOfWall = wall.clientWidth;
const heightOfWall = wall.clientHeight;

const widthOfSpider = spider.clientWidth;
const heightOfSpider = spider.clientHeight;

const spiderLeft = (widthOfWall - widthOfSpider) / 2;
const spiderTop = (heightOfWall - heightOfSpider) / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
