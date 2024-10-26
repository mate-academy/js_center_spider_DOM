'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const leftPosition = (wallWidth - spiderWidth) / 2;
const topPosition = (wallHeight - spiderHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = `${leftPosition}px`;
spider.style.top = `${topPosition}px`;
