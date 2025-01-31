'use strict';

// write code here
const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const width = (wallWidth - spiderWidth) / 2;
const height = (wallHeight - spiderHeight) / 2;

spider.style.left = width + 'px';
spider.style.top = height + 'px';
