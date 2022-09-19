'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallНeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderНeight = spider.clientHeight;

spider.style.top = `${(wallНeight - spiderНeight) / 2}px`;
spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
