'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.position = 'absolute';

  const leftPos = (wall.clientWidth - spider.offsetWidth) / 2;
  const topPos = (wall.clientHeight - spider.offsetHeight) / 2;

  spider.style.left = `${leftPos}px`;
  spider.style.top = `${topPos}px`;
});
