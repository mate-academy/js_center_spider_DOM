'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
