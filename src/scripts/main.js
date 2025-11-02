'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = wall.clientWidth / 2;
const centerY = wall.clientHeight / 2;
const spiderX = spider.clientWidth / 2;
const spiderY = spider.clientHeight / 2;

spider.style.left = `${centerX - spiderX}px`;
spider.style.top = `${centerY - spiderY}px`;
