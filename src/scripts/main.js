'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallWidth = wall.offsetWidth - wall.clientLeft * 2;

spider.style.top = wallWidth / 2 - spider.offsetHeight / 2 + 'px';
spider.style.left = wallWidth / 2 - spider.offsetHeight / 2 + 'px';
