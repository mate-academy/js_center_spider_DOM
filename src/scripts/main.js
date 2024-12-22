'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftPos = wall.clientWidth / 2 - spider.clientWidth / 2;
const topPos = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.left = `${leftPos}px`;
spider.style.top = `${topPos}px`;
