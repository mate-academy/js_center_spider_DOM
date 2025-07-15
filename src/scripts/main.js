'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const widthSpider = spider.offsetWidth;
const heightSpider = spider.offsetHeight;

const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;

const center = (heightWall - heightSpider) / 2;
const left = (widthWall - widthSpider) / 2;

spider.style.top = `${center}px`;
spider.style.left = `${left}px`;
