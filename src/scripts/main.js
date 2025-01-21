'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const spiderTop = (wallRect.height - spiderRect.height) / 2;
const spiderLeft = (wallRect.width - spiderRect.width) / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
