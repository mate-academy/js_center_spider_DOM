'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderlHeight = spider.clientHeight;

  const positionTop = (wallWidth - spiderWidth) / 2;
  const positionLeft = (wallHeight - spiderlHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${positionLeft}px`;
  spider.style.top = `${positionTop}px`;
}

centerSpider();
