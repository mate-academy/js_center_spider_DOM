'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidht = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidht = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const resultHeight = wallHeight / 2 - spiderHeight / 2;
const resultWidth = wallWidht / 2 - spiderWidht / 2;

spider.style.top = `${resultHeight}px`;
spider.style.left = `${resultWidth}px`;
