'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const centerY = (wall.clientHeight - spiderHeight) / 2;
const centerX = (wall.clientWidth - spiderWidth) / 2;

spider.style.top = `${centerY}px`;
spider.style.left = `${centerX}px`;
