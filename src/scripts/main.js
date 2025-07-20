'use strict';

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderTop = wallHeight / 2 - spiderHeight / 2;
const spiderLeft = wallWidth / 2 - spiderWidth / 2;

spider.style.top = `${+spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
