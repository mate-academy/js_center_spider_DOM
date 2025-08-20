'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const turnRight = wall.clientWidth / 2 - spider.clientWidth / 2;
const turnBottom = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.left = `${turnRight}px`;
spider.style.top = `${turnBottom}px`;
