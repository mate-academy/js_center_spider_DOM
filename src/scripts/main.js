'use strict';

// write code here
const wall = document.querySelector('.wall');
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.position = 'absolute';
spider.style.top = (wallHeight / 2 - spiderHeight / 2) + 'px';
spider.style.left = (wallWidth / 2 - spiderWidth / 2) + 'px';


