'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const centerX = wallRect.left + (wallRect.width - spiderRect.width) / 2;
  const centerY = wallRect.top + (wallRect.height - spiderRect.height) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
}

wall.style.position = 'relative';
spider.style.position = 'absolute';

centerSpider();
