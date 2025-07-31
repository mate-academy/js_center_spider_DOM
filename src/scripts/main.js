'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.position = 'absolute';

const centerX = (wall.clientWidth - spider.width) / 2;
const centerY = (wall.clientHeight - spider.height) / 2;

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
// write code here
