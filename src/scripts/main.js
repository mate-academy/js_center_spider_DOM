'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderCenterY = wallHeight / 2 - spiderHeight / 2;
const spiderCenterX = wallWidth / 2 - spiderWidth / 2;

spider.style.top = spiderCenterY + 'px';
spider.style.left = spiderCenterX + 'px';
