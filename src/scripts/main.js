'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallSize = wall.getBoundingClientRect();
const spiderSize = spider.getBoundingClientRect();

spider.style.left = `${(wallSize.width - spiderSize.width) / 2}px`;
spider.style.top = `${(wallSize.height - spiderSize.height) / 2}px`;
