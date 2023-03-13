'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');
const border = parseInt(getComputedStyle(wall).borderWidth);
const spiderSize = spider.offsetHeight;

spider.style.top = `${wall.offsetHeight / 2 - border - (spiderSize / 2)}px`;
spider.style.left = `${wall.offsetWidth / 2 - border - (spiderSize / 2)}px`;
