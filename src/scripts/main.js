'use strict';

function centerElement(wall, spider) {
  const topValue = Math.round(wall.clientHeight / 2 - spider.clientHeight / 2);
  const leftValue = Math.round(wall.clientWidth / 2 - spider.clientWidth / 2);
  const wallPos = getComputedStyle(wall).position;

  if (wallPos !== 'static') {
    spider.style.top = `${topValue}px`;
    spider.style.left = `${leftValue}px`;
  } else {
    const rect = wall.getBoundingClientRect();
    const pageTop = rect.top + window.scrollY;
    const pageLeft = rect.left + window.scrollX;

    spider.style.top = `${pageTop + topValue}px`;
    spider.style.left = `${pageLeft + leftValue}px`;
  }
}

function onImageReady(img, cb) {
  if (img.complete) {
    cb();
  } else {
    img.addEventListener('load', cb, { once: true });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  onImageReady(spider, () => centerElement(wall, spider));
});
