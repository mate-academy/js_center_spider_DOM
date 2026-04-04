'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();
const x = (wallRect.width - spiderRect.width) / 2;
const y = (wallRect.height - spiderRect.height) / 2;

spider.style.top = `${y}px`;
spider.style.left = `${x}px`;
