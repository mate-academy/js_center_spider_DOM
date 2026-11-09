'use strict';

// write code here
const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const spiderX = wallWidth / 2 - spiderWidth / 2;
const spiderY = wallHeight / 2 - spiderHeight / 2;

spider.style.left = `${spiderX}px`;
spider.style.top = `${spiderY}px`;
