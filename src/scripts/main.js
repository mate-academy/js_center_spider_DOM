'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallHeight = wall.clientHeight / 2 - spider.clientHeight / 2;
const wallWidth = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = wallHeight + 'px';
spider.style.left = wallWidth + 'px';
