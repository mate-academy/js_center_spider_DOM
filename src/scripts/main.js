'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderlWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.position = 'relative';
spider.style.top = `${(wallHeight / 2) - (spiderHeight / 2)}px`;
spider.style.left = `${(wallWidth / 2) - (spiderlWidth / 2)}px`;
