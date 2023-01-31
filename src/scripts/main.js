'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const centerPosition
  = (parseFloat(getComputedStyle(wall).width)
  - parseFloat(getComputedStyle(spider).width)) / 2;

spider.style.left = `${centerPosition}px`;
spider.style.top = `${centerPosition}px`;
