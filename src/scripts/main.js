'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const wallH = wall.clientHeight;
const spiderH = spider.clientHeight;

spider.style.top = wallH / 2 - spiderH / 2 + 'px';
spider.style.left = wallH / 2 - spiderH / 2 + 'px';
