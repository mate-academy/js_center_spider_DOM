'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

spider.style.top = `${(wallRect.height - spiderRect.height) / 2}px`;
spider.style.left = `${(wallRect.width - spiderRect.width) / 2}px`;
