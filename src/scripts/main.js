'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const centerX = (wall.clientWidth - spider.clientWidth) / 2;
  const centerY = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
});
