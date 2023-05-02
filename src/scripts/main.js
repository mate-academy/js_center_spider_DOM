'use strict';

const wall = document.querySelector('.wall');
const wallSize = wall.clientWidth;
const spider = document.querySelector('.spider');
const spiderSize = spider.clientWidth;

spider.style.top = `${wallSize / 2 - spiderSize / 2}px`;
spider.style.left = `${wallSize / 2 - spiderSize / 2}px`;
