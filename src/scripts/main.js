'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const offsetX = (wallWidth - spiderWidth) / 2;
  const offsetY = (wallHeight - spiderHeight) / 2;

  spider.style.left = offsetX + 'px';
  spider.style.top = offsetY + 'px';
}

centerSpider();
