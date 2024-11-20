'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();

const spiderRect = spider.getBoundingClientRect();

const centerX = wallRect.width / 2;
const centerY = wallRect.height / 2;

const spiderX = centerX - spiderRect.width / 2;
const spiderY = centerY - spiderRect.height / 2;

spider.style.position = 'absolute';
spider.style.left = `${spiderX}px`;
spider.style.top = `${spiderY}px`;
