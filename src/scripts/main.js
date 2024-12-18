'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const topPos = wall.offsetHeight / 2 - spider.offsetHeight / 2 - 10;
const leftPos = wall.offsetWidth / 2 - spider.offsetWidth / 2 - 10;

Object.assign(spider.style, {
  top: topPos + 'px',
  left: leftPos + 'px',
});
