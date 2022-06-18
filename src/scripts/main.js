'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const calcDistance = prop => {
  return `${(parseFloat(getComputedStyle(wall)[prop]) / 2)
  - (parseFloat(getComputedStyle(spider)[prop]) / 2)}px`;
};

spider.style.top = calcDistance('height');
spider.style.left = calcDistance('width');
