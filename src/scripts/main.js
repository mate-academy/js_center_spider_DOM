'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const spiderOriginOffsetLeft = wallWidth / 2 - spiderWidth / 2;
const spiderOriginOffsetTop = wallHeight / 2 - spiderHeight / 2;

spider.style.left = spiderOriginOffsetLeft + 'px';
spider.style.top = spiderOriginOffsetTop + 'px';
