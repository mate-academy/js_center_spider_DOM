'use strict';

const wall = document.getElementsByClassName('wall')[0];
const spider = document.querySelector('.spider');

const wallWidth = parseInt(window.getComputedStyle(wall).width, 10);
const spiderWidth = parseInt(window.getComputedStyle(spider).width, 10);

spider.style.left = `${(wallWidth / 2) - (spiderWidth / 2)}px`;
spider.style.top = `${(wallWidth / 2) - (spiderWidth / 2)}px`;
