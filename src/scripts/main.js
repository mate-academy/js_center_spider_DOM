'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  const heightWall = wall.clientHeight;
  const widthWall = wall.clientWidth;

  const heightSpider = spider.clientHeight;
  const widthSpider = spider.clientWidth;

  const centerX = widthWall / 2 - widthSpider / 2;
  const centerY = heightWall / 2 - heightSpider / 2;

  spider.style.top = centerY + 'px';
  spider.style.left = centerX + 'px';
}

centerSpider();
