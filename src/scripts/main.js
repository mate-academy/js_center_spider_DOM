'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const stylesForWall = getComputedStyle(wall);
const stylesForSpider = getComputedStyle(spider);

spider.style.top = `${(parseFloat(stylesForWall.height) / 2)
  - (parseFloat(stylesForSpider.height) / 2)}px`;

spider.style.left = `${(parseFloat(stylesForWall.width) / 2)
  - (parseFloat(stylesForSpider.width) / 2)}px`;
