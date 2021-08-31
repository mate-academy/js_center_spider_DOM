'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const styleOfWall = getComputedStyle(wall);
const styleOfSpider = getComputedStyle(spider);

spider.style.top = `${parseFloat(styleOfWall.height) / 2
  - parseFloat(styleOfSpider.height) / 2}px`;

spider.style.left = `${parseFloat(styleOfWall.width) / 2
  - parseFloat(styleOfSpider.width) / 2}px`;
