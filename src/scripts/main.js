'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.style.position = 'relative';

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const borderWidth = parseInt(window.getComputedStyle(wall).borderWidth);

  const spiderTop = (wallRect.height - spiderRect.height) / 2 - borderWidth;
  const spiderLeft = (wallRect.width - spiderRect.width) / 2 - borderWidth;

  spider.style.position = 'absolute';
  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
