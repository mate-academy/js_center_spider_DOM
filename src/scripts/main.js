'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const spiderWidth = spider.offsetWidth;

const wallHeight = wall.clientHeight;
const spiderHeight = spider.offsetHeight;

spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
