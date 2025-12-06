'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const leftPoz = (wallWidth - spiderWidth) / 2;
const topPoz = (wallHeight - spiderHeight) / 2;

spider.style.position = 'absolute';
spider.style.top = topPoz + 'px';
spider.style.left = leftPoz + 'px';
