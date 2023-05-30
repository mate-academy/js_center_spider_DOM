'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const weightWall = wall.clientWidth / 2;
const heightWall = wall.clientHeight / 2;

const weightSpider = spider.clientWidth / 2;
const heightSpider = spider.clientHeight / 2;

spider.style.top = `${weightWall - weightSpider}px`;

spider.style.left = `${heightWall - heightSpider}px`;
