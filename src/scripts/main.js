'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const realWall = getComputedStyle(wall);

spider.style.top = `${(parseFloat(realWall.height)
  - spider.clientHeight) / 2}px`;

spider.style.left = `${(parseFloat(realWall.width)
  - spider.clientWidth) / 2}px`;
