'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.offsetHeight;
const wallWidth = wall.offsetWidth;

const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;

spider.style.top = `${(wallHeight / 2) - (spiderHeight / 2) - 10}px`;
spider.style.left = `${(wallWidth / 2) - (spiderWidth / 2) - 10}px`;
