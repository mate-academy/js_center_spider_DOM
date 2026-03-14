'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.position = 'absolute';
wall.style.position = 'relative';

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const leftPos = (wallWidth - spiderWidth) / 2;
const topPos = (wallHeight - spiderHeight) / 2;

spider.style.left = `${leftPos}px`;
spider.style.top = `${topPos}px`;
