'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const topPosition = wallHeight / 2 - spiderHeight / 2;
const leftPosition = wallWidth / 2 - spiderWidth / 2;

spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
