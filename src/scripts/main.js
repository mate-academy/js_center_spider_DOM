'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const wallHeight = wallRect.height;
const wallWidth = wallRect.width;
const spiderHeight = spiderRect.height;
const spiderWidth = spiderRect.width;

const centrX = wallWidth / 2 - spiderWidth / 2;
const centrY = wallHeight / 2 - spiderHeight / 2;

spider.style.left = `${centrX}px`;
spider.style.top = `${centrY}px`;
