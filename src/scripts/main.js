'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHigth = wall.clientHeight;

spider.style.left = wallWidth / 2 - spider.clientWidth / 2 + 'px';
spider.style.top = wallHigth / 2 - spider.clientHeight / 2 + 'px';
