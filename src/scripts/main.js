'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallWidth = wall.offsetWidth - 20;
  const wallHeight = wall.offsetWidth - 20;

  const centerX = (wallWidth - spiderWidth) / 2;
  const centerY = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${Math.round(centerX)}px`;
  spider.style.top = `${Math.round(centerY)}px`;
}

centerSpider();
