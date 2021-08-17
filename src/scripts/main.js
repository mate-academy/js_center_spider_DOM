'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const topOffset = wall.offsetHeight / 2 - 10 - spider.offsetHeight / 2;

spider.style.top = `${topOffset}px`;

const leftOffset = wall.offsetWidth / 2 - 10 - spider.offsetWidth / 2;

spider.style.left = `${leftOffset}px`;
