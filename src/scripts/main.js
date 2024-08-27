'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = (wall.clientWidth - spider.clientWidth) / 2;
const centerY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
