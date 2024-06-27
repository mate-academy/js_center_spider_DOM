'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.clientHeight;
const spiderHight = spider.clientHeight;
const spiderWidth = spider.clientWidth;
const wallHight = wall.clientHeight;

spider.style.top = wallHight / 2 - spiderHight / 2 + 'px';
spider.style.left = wallWidth / 2 - spiderWidth / 2 + 'px';
