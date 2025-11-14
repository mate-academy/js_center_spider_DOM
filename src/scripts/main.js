'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const centerX = (wallWidth - spiderWidth) / 2;
const centerY = (wallHeight - spiderHeight) / 2;

spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
