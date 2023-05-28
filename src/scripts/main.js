'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const weightWall = wall.offsetWidth;
const heightWall = wall.offsetHeight;

const weightSpider = spider.offsetWidth;
const heightSpider = spider.offsetHeight;

spider.style.top = `${(weightWall - weightSpider) / 2}px`;

spider.style.left = `${(heightWall - heightSpider) / 2}px`;
