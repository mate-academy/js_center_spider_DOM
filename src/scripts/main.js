'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const coordsX = wall.clientWidth / 2;
const coordsY = wall.clientHeight / 2;

spider.style.left = `${coordsX - spider.offsetWidth / 2}px`;
spider.style.top = `${coordsY - spider.offsetHeight / 2}px`;
