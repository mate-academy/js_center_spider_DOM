'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');
const wallSize = wall.offsetWidth;
const spiderSize = spider.offsetWidth;

spider.style.left = wallSize / 2 - spiderSize / 2 + 'px';
spider.style.top = wallSize / 2 - spiderSize / 2 + 'px';
