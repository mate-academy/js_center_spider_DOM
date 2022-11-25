'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallHeight = wall.clientHeight;
const wallWigth = wall.clientWidth;
const spiderHeight = spider.clientHeight;
const spiderWigth = spider.clientWidth;

spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
spider.style.left = `${(wallWigth - spiderWigth) / 2}px`;
