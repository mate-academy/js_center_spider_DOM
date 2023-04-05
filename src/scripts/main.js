'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallSide = parseFloat(getComputedStyle(wall).width);
const spiderSide = parseFloat(getComputedStyle(spider).width);

spider.style.top = wallSide / 2 - spiderSide / 2 + 'px';
spider.style.left = wallSide / 2 - spiderSide / 2 + 'px';
