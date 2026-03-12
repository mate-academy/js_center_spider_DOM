'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector(`.wall`);

const xWall = wall.clientWidth;
const yWall = wall.clientHeight;
const xSpider = spider.clientWidth;
const ySpider = spider.clientHeight;

spider.style.left = `${(xWall - xSpider) / 2}px`;
spider.style.top = `${(yWall - ySpider) / 2}px`;
