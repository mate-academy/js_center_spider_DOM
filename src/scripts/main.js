'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = wall.offsetWidth / 2;
const centerY = wall.offsetHeight / 2;
const spiderLeft = centerX - spider.offsetWidth / 2;
const spiderTop = centerY - spider.offsetHeight / 2;

wall.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.left = `${spiderLeft}px`;
spider.style.top = `${spiderTop}px`;
