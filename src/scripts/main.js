'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

spider.style.position = 'absolute';
spider.style.top = (wallHeight - spiderHeight) / 2 + 'px';
spider.style.left = (wallWidth - spiderWidth) / 2 + 'px';
