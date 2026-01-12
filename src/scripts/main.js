'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const spiderCenterX = Math.round(wallWidth / 2) - Math.round(spiderWidth / 2);
const spiderCenterY = Math.round(wallHeight / 2) - Math.round(spiderHeight / 2);

spider.style.left = spiderCenterX + 'px';
spider.style.top = spiderCenterY + 'px';
