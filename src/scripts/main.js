'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.offsetWidth;
const spiderWidth = spider.offsetWidth;

spider.style.top = `${(wallWidth / 2) - (spiderWidth / 2) - 10}px`;
spider.style.left = `${(wallWidth / 2) - (spiderWidth / 2) - 10}px`;
