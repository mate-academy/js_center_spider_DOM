'use strict';

const wall = document.querySelector('.wall');
const wallProp = getComputedStyle(wall);

const spider = document.querySelector('.spider');
const spiderProp = getComputedStyle(spider);

spider.style.left = `${(parseFloat(wallProp.width)
  - parseFloat(spiderProp.width)) / 2}px`;

spider.style.top = `${(parseFloat(wallProp.height)
  - parseFloat(spiderProp.height)) / 2}px`;
