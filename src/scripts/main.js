'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;

spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
