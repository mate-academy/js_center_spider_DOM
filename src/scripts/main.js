'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centerX = (wallWidth - spiderWidth) / 2;
const centerY = (wallHeight - spiderHeight) / 2;

spider.style.top = `${centerY}px`;
spider.style.left = `${centerX}px`;
