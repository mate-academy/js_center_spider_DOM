'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallRect = wall.getBoundingClientRect();
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

// Calculate the center position
const centerX = (wallRect.width - spiderWidth) / 2 - 10;
const centerY = (wallRect.height - spiderHeight) / 2 - 10;

spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
