'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = wall.clientWidth / 2 - spider.offsetWidth / 2;
const centerY = wall.clientHeight / 2 - spider.offsetHeight / 2;

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
