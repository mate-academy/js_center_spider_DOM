'use strict';

// write code here
const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.style.position = 'relative';
spider.style.position = 'absolute';

const positionVertical = wallHeight / 2 - spiderHeight / 2;
const positionHorizontal = wallWidth / 2 - spiderWidth / 2;

spider.style.top = String(positionVertical) + 'px';
spider.style.left = String(positionHorizontal) + 'px';
