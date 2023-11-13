'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = (wall.offsetWidth - spider.offsetWidth) / 2;
const centerY = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
