'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftPosition = (wall.clientWidth - spider.offsetWidth) / 2;
const topPosition = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.left = leftPosition + 'px';
spider.style.top = topPosition + 'px';
