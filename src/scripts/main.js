'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.left = `${
  Number.parseInt(getComputedStyle(wall).width) / 2 -
  Number.parseInt(getComputedStyle(spider).width) / 2
}px`;

spider.style.top = `${
  Number.parseInt(getComputedStyle(wall).height) / 2 -
  Number.parseInt(getComputedStyle(spider).height) / 2
}px`;
