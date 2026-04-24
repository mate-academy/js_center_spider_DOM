'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const maxX = (wallWidth - spiderWidth) / 2;
const maxY = (wallHeight - spiderHeight) / 2;

spider.style.left = `${maxX}px`;
spider.style.top = `${maxY}px`;
