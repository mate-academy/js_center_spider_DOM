'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.position = 'absolute';

  const leftPos = (wall.clientWidth - spider.width) / 2;
  const topPos = (wall.clientHeight - spider.height) / 2;

  spider.style.left = `${leftPos}px`;
  spider.style.top = `${topPos}px`;
});
