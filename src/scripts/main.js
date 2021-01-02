'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const heightWall = wall.clientHeight;
const heightSpider = spider.clientHeight;
const widthWall = wall.clientWidth;
const widthSpider = spider.clientWidth;

spider.style.top = `${heightWall / 2 - heightSpider / 2}px`;
spider.style.left = `${widthWall / 2 - widthSpider / 2}px`;
