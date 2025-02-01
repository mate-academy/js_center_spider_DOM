'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderCenterY = spider.clientHeight / 2;
const spiderCenterX = spider.clientWidth / 2;
const wallCenterY = wall.clientHeight / 2;
const wallCenterX = wall.clientWidth / 2;

spider.style.top = wallCenterY - spiderCenterY + 'px';
spider.style.left = wallCenterX - spiderCenterX + 'px';
