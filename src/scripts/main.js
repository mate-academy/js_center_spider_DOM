'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallSize = wall.getBoundingClientRect().width;
const spiderSize = spider.getBoundingClientRect().width;
const difference = (wallSize / 2) - (spiderSize / 2);

spider.style.left = `${difference}px`;
spider.style.top = `${difference}px`;
