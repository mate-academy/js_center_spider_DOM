'use strict';

const spider = document.querySelector('.spider');
const spiderDim = {
  width: spider.offsetWidth,
  height: spider.offsetHeight,
};

const wall = document.querySelector('.wall');
const wallDim = {
  width: wall.clientWidth,
  height: wall.clientHeight,
};

const leftSpider = wallDim.width / 2 - spiderDim.width / 2;
const topSpider = wallDim.height / 2 - spiderDim.height / 2;

spider.style.left = leftSpider + 'px';
spider.style.top = topSpider + 'px';
