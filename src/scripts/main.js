'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const xWall = wall.clientWidth; // без border
const xSpider = spider.offsetWidth;

const yWall = wall.clientHeight; // без border
const ySpider = spider.offsetHeight;

const resultLeft = (xWall - xSpider) / 2;
const resultTop = (yWall - ySpider) / 2;

spider.style.left = resultLeft + 'px';
spider.style.top = resultTop + 'px';
