'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftOffset = (wall.clientWidth - spider.clientWidth) / 2;
const topOffset = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${leftOffset}px`;
spider.style.top = `${topOffset}px`;
