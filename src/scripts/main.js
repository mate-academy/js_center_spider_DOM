'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.getElementById('spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const topPosition = (wallRect.height - spiderRect.height) / 2;
const leftPosition = (wallRect.width - spiderRect.width) / 2;

spider.style.top = topPosition + 'px';
spider.style.left = leftPosition + 'px';
