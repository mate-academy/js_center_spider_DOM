'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const styleWall = window.getComputedStyle(wall);
const styleSpider = window.getComputedStyle(spider);

const top = `${parseFloat(styleWall.height) / 2
  - parseFloat(styleSpider.height) / 2}`;
const left = `${parseFloat(styleWall.width) / 2
  - parseFloat(styleSpider.width) / 2}`;

spider.style.cssText = `top: ${top}px; left: ${left}px;`;
