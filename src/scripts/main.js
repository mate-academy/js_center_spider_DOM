'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const coordX = (wallRect.width - spiderRect.width) / 2 - wall.clientLeft;
const coordY = (wallRect.height - spiderRect.height) / 2 - wall.clientTop;

spider.style.position = 'absolute';
spider.style.top = `${coordX}px`;
spider.style.left = `${coordY}px`;
