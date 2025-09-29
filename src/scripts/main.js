'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallStyle = getComputedStyle(wall);

  if (wallStyle.position === 'static') {
    wall.style.position = 'relative';
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const leftPosition = (wallRect.width - spiderRect.width) / 2;
  const topPosition = (wallRect.height - spiderRect.height) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
}

window.addEventListener('load', centerSpider);
window.addEventListener('resize', centerSpider);
