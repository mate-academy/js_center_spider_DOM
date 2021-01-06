'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const centerX = (wall.clientWidth - spider.clientWidth) / 2;
const centerY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.top = `${centerY}px`;
spider.style.left = `${centerX}px`;
