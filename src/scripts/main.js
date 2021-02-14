'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const midleSpiderSize = parseInt(getComputedStyle(spider).width) / 2;

const topCoord = parseFloat(getComputedStyle(field).width) / 2 - midleSpiderSize;
const leftCoord = parseFloat(getComputedStyle(field).width) / 2 - midleSpiderSize;

spider.style.top = topCoord + 'px';
spider.style.left = leftCoord + 'px';
