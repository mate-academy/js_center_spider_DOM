'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const x = (wallWidth - spiderWidth) / 2;
const y = (wallHeight - spiderHeight) / 2;

spider.style.left = x + 'px';
spider.style.top = y + 'px';
