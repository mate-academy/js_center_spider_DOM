'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const topPos = 0.5 * wall.clientHeight - 0.5 * spider.clientHeight;
const leftPos = 0.5 * wall.clientWidth - 0.5 * spider.clientWidth;

spider.style.left = leftPos + 'px';
spider.style.top = topPos + 'px';
