'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = (wall.clientWidth - spider.clientWidth) / 2;
const centerY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.position = 'absolute';
spider.style.top = `${centerY}px`;
spider.style.left = `${centerX}px`;
