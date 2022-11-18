'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallStyle = getComputedStyle(wall);
const spiderStyle = getComputedStyle(spider);

spider.style.top = `${(parseFloat(wallStyle
  .height) / 2) - (parseFloat(spiderStyle.height) / 2)}px`;

spider.style.left = `${(parseFloat(wallStyle
  .width) / 2) - (parseFloat(spiderStyle.width) / 2)}px`;
