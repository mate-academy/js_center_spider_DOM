'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallCenter = {
  x: wall.clientWidth / 2,
  y: wall.clientHeight / 2,
};

const spiderCenter = {
  x: spider.clientWidth / 2,
  y: spider.clientHeight / 2,
};

spider.style.top = wallCenter.y - spiderCenter.y + 'px';
spider.style.left = wallCenter.x - spiderCenter.x + 'px';
