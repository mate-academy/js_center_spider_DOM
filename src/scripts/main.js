'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.position = 'absolute';
spider.style.left = (wallWidth - spiderWidth) / 2 + 'px';
spider.style.top = (wallHeight - spiderHeight) / 2 + 'px';
