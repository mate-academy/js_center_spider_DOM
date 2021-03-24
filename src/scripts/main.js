'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const height = parseFloat(getComputedStyle(wall).height) / 2
  - parseFloat(getComputedStyle(spider).height) / 2;
const width = parseFloat(getComputedStyle(wall).width) / 2
  - parseFloat(getComputedStyle(spider).width) / 2;

spider.style.top = `${height}px`;
spider.style.left = `${width}px`;
