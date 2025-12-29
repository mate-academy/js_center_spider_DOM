'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallPosition = wall.getBoundingClientRect();
const spiderPosition = spider.getBoundingClientRect();

const centerX = wallPosition.width / 2 - spiderPosition.width / 2;
const centerY = wallPosition.height / 2 - spiderPosition.height / 2;

spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
