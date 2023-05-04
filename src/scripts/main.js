'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const border = parseFloat(getComputedStyle(wall).borderWidth);
const offset = wall.offsetWidth / 2 - spider.offsetWidth / 2 - border;

spider.style.top = `${offset}px`;
spider.style.left = `${offset}px`;
