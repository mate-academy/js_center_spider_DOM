'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const centeredTop = (wallRect.height - spiderRect.height) / 2;
  const centeredLeft = (wallRect.width - spiderRect.width) / 2;

  spider.style.top = `${centeredTop}px`;
  spider.style.left = `${centeredLeft}px`;
}

centerSpider();

window.addEventListener('resize', centerSpider);
