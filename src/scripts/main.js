'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = wall.clientWidth / 2;
const centerY = wall.clientHeight / 2;

spider.style.left = `${centerX - spider.offsetWidth / 2}px`;
spider.style.top = `${centerY - spider.offsetHeight / 2}px`;
