'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';
// eslint-disable-next-line no-console
console.log(wall.offsetWidth, spider.offsetWidth);

const leftPos = (wall.offsetWidth - spider.offsetWidth) / 2;
const topPos = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.left = `${leftPos}px`;
spider.style.top = `${topPos}px`;
