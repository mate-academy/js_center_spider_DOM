'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftOffset = (wall.clientWidth - spider.offsetWidth) / 2;
const topOffset = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = `${leftOffset}px`;
spider.style.top = `${topOffset}px`;
