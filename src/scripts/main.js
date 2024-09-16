'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const styleWall = getComputedStyle(wall);// without paddings and margins, px
const styleSpider = getComputedStyle(spider);// without paddings and margins, px

spider.style.top = `${(parseFloat(styleWall.height)
  - parseFloat(styleSpider.height)) / 2}px`;

spider.style.left = `${(parseFloat(styleWall.width)
  - parseFloat(styleSpider.width)) / 2}px`;
