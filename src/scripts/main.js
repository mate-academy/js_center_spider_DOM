'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
