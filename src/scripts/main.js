'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallSizes = wall.getBoundingClientRect();
const spiderSizes = spider.getBoundingClientRect();
const x = wallSizes.width / 2 - spiderSizes.width / 2;
const y = wallSizes.height / 2 - spiderSizes.height / 2;

spider.style.left = x + 'px';
spider.style.top = y + 'px';
