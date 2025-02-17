'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
