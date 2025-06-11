'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftS = (wall.clientWidth - spider.clientWidth) / 2;
const topS = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.position = 'absolute';
spider.style.top = topS + 'px';
spider.style.left = leftS + 'px';
