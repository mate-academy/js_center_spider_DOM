'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.width;
const spiderHeight = spider.height;

spider.style.top = (wallWidth - spiderWidth) / 2 + 'px';
spider.style.left = (wallHeight - spiderHeight) / 2 + 'px';
