'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const leftPos = (wallWidth - spiderWidth) / 2;
const topPos = (wallHeight - spiderHeight) / 2;

spider.style.left = leftPos + 'px';
spider.style.top = topPos + 'px';
