'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');
const spiderSize = spider.clientWidth;
const wallSize = wall.clientWidth;

spider.style.top = wallSize / 2 - spiderSize / 2 + 'px';
spider.style.left = wallSize / 2 - spiderSize / 2 + 'px';
