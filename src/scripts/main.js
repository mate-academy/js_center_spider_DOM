'use strict';

// write code here

const wall = document.querySelector('div.wall');
const spider = document.querySelector('img.spider');

const wallSize = {
  w: parseInt(getComputedStyle(wall).width.split('px').join('')),
  h: parseInt(getComputedStyle(wall).height.split('px').join('')),
};

const spiderSize = {
  w: parseInt(getComputedStyle(spider).width.split('px').join('')),
  h: parseInt(getComputedStyle(spider).height.split('px').join('')),
};

spider.style.top = wallSize.h / 2 - spiderSize.h / 2 + 'px';
spider.style.left = wallSize.w / 2 - spiderSize.w / 2 + 'px';
