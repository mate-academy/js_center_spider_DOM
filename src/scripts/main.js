'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const topCoord = (wallRect.height - spiderRect.height) / 2;
const leftCoord = (wallRect.width - spiderRect.width) / 2;

spider.style.top = topCoord + 'px';
spider.style.left = leftCoord + 'px';
