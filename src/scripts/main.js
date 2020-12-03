'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const widthSpider = spider.clientWidth / 2;
const heightSpider = spider.clientHeight / 2;
const leftWall = wall.clientWidth / 2;
const topWall = wall.clientHeight / 2;

spider.style.top = `${topWall - heightSpider}px`;
spider.style.left = `${leftWall - widthSpider}px`;
