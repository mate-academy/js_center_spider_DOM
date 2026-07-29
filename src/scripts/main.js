'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const x = (wallRect.width - spiderRect.width) / 2;
const y = (wallRect.height - spiderRect.height) / 2;

spider.style.position = 'absolute';
spider.style.left = x + 'px';
spider.style.top = y + 'px';
