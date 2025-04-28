'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const left = (wallWidth - spiderWidth) / 2;
const upper = (wallHeight - spiderHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = `${left}px`;
spider.style.top = `${upper}px`;
