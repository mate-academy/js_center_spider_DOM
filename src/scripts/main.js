'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');
const wallHeight = wall.clientHeight;
const spiderHeight = spider.clientHeight;
const spiderPosition = (wallHeight / 2) - (spiderHeight / 2);

spider.style.top = spiderPosition + 'px';
spider.style.left = spiderPosition + 'px';
