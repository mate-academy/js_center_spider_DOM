'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const topValue = wallHeight / 2 - spiderHeight / 2;
const leftValue = wallWidth / 2 - spiderWidth / 2;

spider.style.top = `${topValue}px`;
spider.style.left = `${leftValue}px`;
