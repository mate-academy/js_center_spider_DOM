'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const widthWall = wall.clientWidth;
const widthSpider = spider.clientWidth;

const heightWall = wall.clientHeight;
const heightSpider = spider.clientHeight;

const leftPosition = (widthWall - widthSpider) / 2;
const topPosition = (heightWall - heightSpider) / 2;

spider.style.position = 'absolute';
spider.style.left = `${leftPosition}px`;
spider.style.top = `${topPosition}px`;
