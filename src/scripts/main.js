'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const centreX = (wallRect.width - spiderRect.width) / 2;
const centreY = (wallRect.height - spiderRect.height) / 2;

spider.style.position = 'absolute';
spider.style.left = `${centreX}px`;
spider.style.top = `${centreY}px`;
