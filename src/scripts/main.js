'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderSize = spider.offsetWidth;

const centerX = (wallRect.width - spiderSize) / 2;
const centerY = (wallRect.height - spiderSize) / 2;

spider.style.position = 'absolute';
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
