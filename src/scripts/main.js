'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.getBoundingClientRect().width;
const spiderHeight = spider.getBoundingClientRect().height;
const wallWidth = wall.getBoundingClientRect().width;
const wallHeight = wall.getBoundingClientRect().height;

spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
