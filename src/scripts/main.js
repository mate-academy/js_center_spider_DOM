'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const topPosition = (wallHeight - spiderHeight) / 2;
const leftPosition = (wallWidth - spiderWidth) / 2;

spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
