'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;  

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centerX = (wallWidth - spiderWidth) / 2;
const centerY = (wallHeight - spiderHeight) / 2;

wall.style.position = 'relative';
spider.style.position = 'absolute';

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
