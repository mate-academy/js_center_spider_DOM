'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const centerTop = (wallHeight - spiderHeight) / 2;
const centerLeft = (wallWidth - spiderWidth) / 2;

spider.style.top = centerTop + 'px';
spider.style.left = centerLeft + 'px';
// write code here
