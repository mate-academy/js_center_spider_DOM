'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const X = (wallRect.width - spiderRect.width) / 2;
const Y = (wallRect.height - spiderRect.height) / 2;

spider.style.position = 'absolute';
spider.style.left = `${X}px`;
spider.style.top = `${Y}px`;
