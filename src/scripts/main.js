'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
