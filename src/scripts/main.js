'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const spiderPosTop = wallHeight / 2 - spiderHeight / 2;
const spiderPosLeft = wallWidth / 2 - spiderWidth / 2;

spider.style.top = `${spiderPosTop}px`;
spider.style.left = `${spiderPosLeft}px`;
