'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = `calc(${wall.clientWidth / 2}px - ${spider.clientWidth / 2}px)`;
spider.style.top = `calc(${wall.clientHeight / 2}px - ${spider.clientHeight / 2}px)`;
