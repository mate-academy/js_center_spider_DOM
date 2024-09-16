'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function position(valueSpider, valueWall) {
  return `${(valueWall - valueSpider) / 2}px`;
}

spider.style.top = position(spider.offsetHeight, wall.clientHeight);
spider.style.left = position(spider.offsetWidth, wall.clientWidth);
