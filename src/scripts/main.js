'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const x = (wallWidth - spiderWidth) / 2;
const y = (wallHeight - spiderHeight) / 2;

spider.style.top = `${y}px`;
spider.style.left = `${x}px`;
