'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function moveToCenter() {
  const styleWall = getComputedStyle(wall);
  const styleSpider = getComputedStyle(spider);
  const wallWidth = +styleWall.width.slice(0, -2) / 2;
  const wallHeight = +styleWall.height.slice(0, -2) / 2;
  const spiderWidth = +styleSpider.width.slice(0, -2) / 2;
  const spiderHeight = +styleSpider.height.slice(0, -2) / 2;
  const top = wallHeight - spiderHeight;
  const left = wallWidth - spiderWidth;

  spider.style.top = top + 'px';
  spider.style.left = left + 'px';
}

moveToCenter();
