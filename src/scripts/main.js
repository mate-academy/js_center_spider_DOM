'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const leftPoint = wall.clientHeight / 2 - spider.clientHeight / 2;
const topPoint = wall.clientWidth / 2 - spider.clientHeight / 2;

spider.style.position = 'absolute';
spider.style.top = topPoint + 'px';
spider.style.left = leftPoint + 'px';
