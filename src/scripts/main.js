'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const topPosition = (wallHeight - spiderHeight) / 2;
const leftPosition = (wallWidth - spiderWidth) / 2;

spider.style.position = 'absolute';
spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
