'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
