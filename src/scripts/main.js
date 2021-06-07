'use strict';

// write code here
const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const coordX = wall.offsetWidth / 2 - spider.offsetWidth / 2;
const coordY = wall.offsetHeight / 2 - spider.offsetHeight / 2;

spider.style.top = coordY + 'px';
spider.style.left = coordX + 'px';
