'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const leftPosition = (wall.clientWidth - spider.offsetWidth) / 2;
const topPosition = (wall.clientHeight - spider.offsetHeight) / 2;

Object.assign(spider.style, {
  left: `${leftPosition}px`,
  top: `${topPosition}px`,
});
