'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const cssWall = getComputedStyle(wall);
const cssSpider = getComputedStyle(spider);

spider.style.top = `${(parseFloat(cssWall.height)
  - parseFloat(cssSpider.height)) / 2}px`;

spider.style.left = `${(parseFloat(cssWall.width)
  - parseFloat(cssSpider.width)) / 2}px`;
