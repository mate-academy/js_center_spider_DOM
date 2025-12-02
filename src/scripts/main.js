'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centerX = (wallWidth - spiderWidth) / 2;
const centerY = (wallHeight - spiderHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
