'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const centerWidth = (wall.clientWidth - spider.clientWidth) / 2;
const centerHeight = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = centerWidth + 'px';
spider.style.top = centerHeight + 'px';
