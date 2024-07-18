'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const topOffset = wall.clientHeight / 2 - spider.clientHeight / 2;
const leftOffset = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = topOffset + 'px';
spider.style.left = leftOffset + 'px';
