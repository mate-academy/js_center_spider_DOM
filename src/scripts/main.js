'use strict';

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;

spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
