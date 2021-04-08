'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = `${parseFloat(getComputedStyle(wall).height) / 2
  - (parseFloat(getComputedStyle(spider).height) / 2)}px`;

spider.style.left = `${parseFloat(getComputedStyle(wall).width) / 2
  - (parseFloat(getComputedStyle(spider).width) / 2)}px`;
