'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallHeight = +window.getComputedStyle(wall)
  .getPropertyValue('height').replace('px', '');
const wallWidth = +window.getComputedStyle(wall)
  .getPropertyValue('width').replace('px', '');

const spiderHeight = +window.getComputedStyle(spider)
  .getPropertyValue('height').replace('px', '');
const spiderWidth = +window.getComputedStyle(spider)
  .getPropertyValue('width').replace('px', '');

spider.style.top = (wallHeight - spiderHeight) / 2 + 'px';
spider.style.left = (wallWidth - spiderWidth) / 2 + 'px';
