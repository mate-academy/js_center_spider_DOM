'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const spiderWidth = spider.clientWidth;

spider.style.left = `${(wallWidth / 2) - (spiderWidth / 2)}px`;
spider.style.top = `${(wallWidth / 2) - (spiderWidth / 2)}px`;
