'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const widthSpider = spider.offsetWidth;
const heightSpider = spider.offsetHeight;
const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;

spider.style.left = (widthWall - widthSpider) / 2 + 'px';
spider.style.top = (heightWall - heightSpider) / 2 + 'px';
