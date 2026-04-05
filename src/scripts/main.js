'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const leftCoord = wallWidth / 2 - spiderWidth / 2;
const topCoord = wallHeight / 2 - spiderHeight / 2;

spider.style.left = `${leftCoord}px`;
spider.style.top = `${topCoord}px`;
