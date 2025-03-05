'use strict';

// write code here
const wall = document.getElementsByClassName('wall')[0];
const wallHeight = wall.offsetHeight;
const wallWidth = wall.offsetWidth;
const wallTop = wall.offsetTop;
const wallLeft = wall.offsetLeft;
const centerX = wallWidth / 2;
const centerY = wallHeight / 2;
const spider = document.getElementsByClassName('spider')[0];
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.left = centerX - spiderWidth / 2 + 'px';
spider.style.top = centerY - spiderHeight / 2 + 'px';
