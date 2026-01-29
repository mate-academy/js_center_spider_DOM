'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

function centerSpider() {
  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const leftPx = (wallWidth - spiderWidth) / 2;
  const topPx = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${leftPx}px`;
  spider.style.top = `${topPx}px`;
}

centerSpider();
