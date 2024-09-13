'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const centerX = wallRect.width / 2 - (spiderRect.width / 2 + 10);
const centerY = wallRect.height / 2 - (spiderRect.height / 2 + 10);

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
