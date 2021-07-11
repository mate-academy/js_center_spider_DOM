'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallSize = wall.clientHeight;
const spiderSize = spider.clientHeight;

spider.style.top = `${(wallSize - spiderSize) / 2}px`;
spider.style.left = `${(wallSize - spiderSize) / 2}px`;
