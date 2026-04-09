'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderHight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

spider.style.top = wallHeight / 2 - spiderHight / 2 + 'px';
spider.style.left = wallWidth / 2 - spiderWidth / 2 + 'px';
