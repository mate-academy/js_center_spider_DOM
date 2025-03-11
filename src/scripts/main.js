'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;

const widthSpider = spider.clientWidth;
const heightSpider = spider.clientHeight;

spider.style.top = `${(heightWall - heightSpider) / 2}px`;
spider.style.left = `${(widthWall - widthSpider) / 2}px`;
