'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const centerX = (wallRect.width - spiderRect.width) / 2;
  const centerY = (wallRect.height - spiderRect.height) / 2;

  spider.style.left = `${centerX - 10}px`;
  spider.style.top = `${centerY - 10}px`;
});
