'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = wall.clientWidth / 2;
const centerY = wall.clientHeight / 2;
const spiderTop = centerX - (spider.clientWidth / 2);
const spiderLeft = centerY - (spider.clientHeight / 2);

spider.style.top = spiderTop + 'px';
spider.style.left = spiderLeft + 'px';
