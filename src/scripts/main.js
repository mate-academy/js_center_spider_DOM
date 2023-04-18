'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const style = getComputedStyle(wall);
const wallWidth = parseFloat(style.width);
const wallHeight = parseFloat(style.height);

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const leftPosition = wallWidth / 2 - (spiderWidth / 2);
const topPosition = wallHeight / 2 - (spiderHeight / 2);

spider.style.left = `${leftPosition}px`;
spider.style.top = `${topPosition}px`;