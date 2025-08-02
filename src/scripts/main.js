'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const coordinatesX = (wallWidth - spiderWidth) / 2;
const coordinatesY = (wallHeight - spiderHeight) / 2;

spider.style.top = `${coordinatesX}px`;
spider.style.left = `${coordinatesY}px`;
