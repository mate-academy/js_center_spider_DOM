'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const left = (wallWidth - spiderWidth) / 2;
const topPosition = (wallHeight - spiderHeight) / 2;

spider.style.left = `${left}px`;
spider.style.top = `${topPosition}px`;
