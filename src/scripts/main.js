'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const centerY = (wallHeight - spiderHeight) / 2;
const centerX = (wallWidth - spiderWidth) / 2;

wall.style.position = 'relative';
spider.style.position = 'absolute';

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
