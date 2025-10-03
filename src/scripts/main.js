'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (getComputedStyle(wall).position === 'static') {
  wall.style.position = 'relative';
}

function centerSpider() {
  if (!wall || !spider) {
    return;
  }

  const left = (wall.clientWidth - spider.clientWidth) / 2;
  const topOffset = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${topOffset}px`;
}

if (spider.complete) {
  centerSpider();
} else {
  spider.addEventListener('load', centerSpider);
}

window.addEventListener('resize', centerSpider);
