'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallSize = wall.getBoundingClientRect().width;
const spiderSize = spider.getBoundingClientRect().width;

wall.style.boxSizing = 'border-box';
spider.style.left = `${wallSize / 2 - spiderSize}px`;
spider.style.top = `${wallSize / 2 - spiderSize}px`;
