'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();

wall.getBoundingClientRect();

const spiderRect = spider.getBoundingClientRect();

spider.style.position = 'absolute';

const left = wallRect.width / 2 - spiderRect.width / 2;

const tops = wallRect.height / 2 - spiderRect.height / 2;

spider.style.left = left + 'px';
spider.style.top = tops + 'px';
