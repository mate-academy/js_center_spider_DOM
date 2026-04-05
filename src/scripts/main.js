'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;
const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;
const posTop = wallHeight / 2 - spiderHeight / 2;
const posLeft = wallWidth / 2 - spiderWidth / 2;

spider.style.top = `${posTop}px`;
spider.style.left = `${posLeft}px`;
