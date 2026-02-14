'use strict';

// write code here
function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (wallRect.width === 0 || wallRect.height === 0) {
    return;
  }

  if (spiderRect.width === 0 || spiderRect.height === 0) {
    return;
  }

  const varLeft = (wallRect.width - spiderRect.width) / 2;
  const varTop = (wallRect.height - spiderRect.height) / 2;

  if (!Number.isFinite(varLeft) || !Number.isFinite(varTop)) {
    return;
  }

  spider.style.left = `${varLeft}px`;
  spider.style.top = `${varTop}px`;
}

window.addEventListener('load', centerSpider);
