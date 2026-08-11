'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;
const widthSpider = spider.clientWidth;
const heightSpider = spider.clientHeight;

const centeredHeight = (heightWall - heightSpider) / 2;
const centeredWidth = (widthWall - widthSpider) / 2;

spider.style.top = `${centeredHeight}px`;
spider.style.left = `${centeredWidth}px`;
