'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  const left = (wall.clientWidth - spider.offsetWidth) / 2;
  const topPx = (wall.clientHeight - spider.offsetHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${topPx}px`;
}

if (spider.complete && spider.naturalWidth !== 0) {
  centerSpider();
} else {
  spider.addEventListener('load', centerSpider);
}
