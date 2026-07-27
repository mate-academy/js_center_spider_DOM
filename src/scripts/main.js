'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();
const bord = getComputedStyle(wall).borderWidth;

spider.style.left =
  (wallRect.width - spiderRect.width) / 2 - parseInt(bord) + 'px';

spider.style.top =
  (wallRect.height - spiderRect.height) / 2 - parseInt(bord) + 'px';
