'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.scrollWidth;
const wallHeight = wall.scrollHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.scrollWidth;
const spiderHeight = spider.scrollHeight;

spider.style.left = (wallWidth - spiderWidth) / 2 + 'px';
spider.style.top = (wallHeight - spiderHeight) / 2 + 'px';
