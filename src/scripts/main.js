'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = wall.clientWidth / 2 - spider.clientWidth / 2 - 10;
const spiderHeight = wall.clientHeight / 2 - spider.clientHeight / 2 - 10;

spider.style.left = spiderWidth + 'px';
spider.style.top = spiderHeight + 'px';
