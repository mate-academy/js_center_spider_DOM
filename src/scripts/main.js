'use strict';

function centerSpider() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();

  spider.style.position = 'absolute';
  spider.style.left = `${(wallRect.width - spider.offsetWidth) / 2 - wall.clientLeft}px`;
  spider.style.top = `${(wallRect.height - spider.offsetHeight) / 2 - wall.clientTop}px`;
}

centerSpider();
