'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
