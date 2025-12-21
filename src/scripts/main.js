'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderRect = spider.getBoundingClientRect();

const leftOffset = wall.clientWidth / 2 - spiderRect.width / 2;
const topOffset = wall.clientHeight / 2 - spiderRect.height / 2;

wall.style.position = 'relative';
spider.style = `position: absolute; left: ${leftOffset}px; top: ${topOffset}px;`;
