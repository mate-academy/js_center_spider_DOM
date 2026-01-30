'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

function centerSpiderPx() {
  const centerX = wall.clientWidth / 2;
  const centerY = wall.clientHeight / 2;

  const leftPx = centerX - spider.offsetWidth / 2;
  const topPx = centerY - spider.offsetHeight / 2;

  spider.style.left = `${leftPx}px`;
  spider.style.top = `${topPx}px`;
}

centerSpiderPx();
