'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const style = getComputedStyle(wall);
const style2 = getComputedStyle(spider);

spider.style.top = `${(parseFloat(style.height)
  - parseFloat(style2.height)) / 2}px`;

spider.style.left = `${(parseFloat(style.width)
  - parseFloat(style2.width)) / 2}px`;
