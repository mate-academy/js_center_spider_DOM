'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallCenterX = wall.offsetWidth / 2;
const wallCenterY = wall.offsetHeight / 2;

const spiderCenterX = spider.offsetWidth / 2;
const spiderCenterY = spider.offsetHeight / 2;

const distanceX = wallCenterX - spiderCenterX;
const distanceY = wallCenterY - spiderCenterY;

spider.style.left = distanceX + 'px';
spider.style.top = distanceY + 'px';
