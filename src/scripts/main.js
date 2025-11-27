'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const spiderWidth = spider.clientWidth;
const leftPosition = (wallWidth - spiderWidth) / 2;

const wallHeight = wall.clientHeight;
const spiderHeight = spider.clientHeight;
const topPosition = (wallHeight - spiderHeight) / 2;

spider.style.left = `${leftPosition}px`;
spider.style.top = `${topPosition}px`;
