'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const spiderHorizontalCenter = wallWidth / 2 - spiderWidth / 2;
const spiderVerticalCenter = wallHeight / 2 - spiderHeight / 2;

spider.style.left = `${spiderHorizontalCenter}px`;
spider.style.top = `${spiderVerticalCenter}px`;
