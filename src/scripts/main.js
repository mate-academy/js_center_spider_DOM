'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderWidth = parseFloat(spider.clientWidth);
const spiderHeight = parseFloat(spider.clientHeight);
const wallHeight = parseFloat(wall.clientHeight);
const wallWidth = parseFloat(wall.clientWidth);

const topPos = wallHeight / 2 - spiderHeight / 2;
const leftPos = wallWidth / 2 - spiderWidth / 2;

spider.style.top = `${topPos}px`;
spider.style.left = `${leftPos}px`;
