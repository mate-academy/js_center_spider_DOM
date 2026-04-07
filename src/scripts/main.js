'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centerY = (wallHeight - spiderHeight) / 2;
const centerX = (wallWidth - spiderWidth) / 2;

wall.style.position = 'relative';
spider.style.position = 'absolute';

spider.style.top = centerY + 'px';
spider.style.left = centerX + 'px';
