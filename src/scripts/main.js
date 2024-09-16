'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const styleWall = getComputedStyle(wall);
const styleSpider = getComputedStyle(spider);

spider.style.left = `${(parseFloat(styleWall.width) / 2) - (
  parseFloat(styleSpider.width) / 2)}px`;

spider.style.top = `${(parseFloat(styleWall.height) / 2) - (
  parseFloat(styleSpider.height) / 2)}px`;
