'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spiderLeft = (wallWidth / 2) - (spiderWidth / 2) - spider.offsetLeft;
const spiderTop = (wallHeight / 2) - (spiderHeight / 2) - spider.offsetTop;

spider.style.left = spiderLeft + 'px';
spider.style.top = spiderTop + 'px';
