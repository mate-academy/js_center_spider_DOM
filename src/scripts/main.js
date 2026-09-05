'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

wall.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.left = wallWidth / 2 - spider.offsetWidth / 2 + 'px';
spider.style.top = wallHeight / 2 - spider.offsetHeight / 2 + 'px';
