'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const topValue = wall.clientHeight / 2 - spider.offsetHeight / 2;
const leftValue = wall.clientWidth / 2 - spider.offsetWidth / 2;

spider.style.top = `${topValue}px`;
spider.style.left = `${leftValue}px`;
