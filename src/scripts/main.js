'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallHeightCenter
  = Math.round(wall.getBoundingClientRect().height / 2);
const wallWidthCenter
  = Math.round(wall.getBoundingClientRect().width / 2);

const spiderWidthCenter
  = Math.round(spider.getBoundingClientRect().width / 2);
const spiderHeightCenter
  = Math.round(spider.getBoundingClientRect().height / 2);

spider.style.top
  = (wallHeightCenter - spiderHeightCenter) - (spiderHeightCenter / 2) + 'px';

spider.style.left
  = (wallWidthCenter - spiderWidthCenter) - (spiderWidthCenter / 2) + 'px';
