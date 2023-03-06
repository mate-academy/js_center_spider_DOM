'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.top = `${(wallWidth / 2) - (spiderWidth / 2)}px`;
spider.style.left = `${(wallHeight / 2) - (spiderHeight / 2)}px`;
