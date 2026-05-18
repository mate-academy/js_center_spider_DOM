'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.position = 'absolute';

const centerX = wall.offsetWidth / 2 - spider.offsetWidth / 2;
const centerY = wall.offsetHeight / 2 - spider.offsetHeight / 2;

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
