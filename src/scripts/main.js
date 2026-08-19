'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.clientWidth;
const spiderWidth = spider.clientWidth;
const wallHeight = wall.clientHeight;
const spiderHeight = spider.clientHeight;
const heightCentering = wallHeight / 2 - spiderHeight / 2;
const widthCentering = wallWidth / 2 - spiderWidth / 2;

spider.style.top = `${heightCentering}px`;
spider.style.left = `${widthCentering}px`;
