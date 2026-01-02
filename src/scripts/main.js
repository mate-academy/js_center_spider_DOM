'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const distanceToLeft = (wall.clientWidth - spider.clientWidth) / 2;
const distanceToTop = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = distanceToLeft + 'px';
spider.style.top = distanceToTop + 'px';
