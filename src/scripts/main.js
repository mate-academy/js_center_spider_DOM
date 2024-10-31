'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const a = wall.clientWidth;
const b = wall.clientHeight;

spider.style.top = `${(b - spider.height) / 2}px`;
spider.style.left = `${(a - spider.width) / 2}px`;
