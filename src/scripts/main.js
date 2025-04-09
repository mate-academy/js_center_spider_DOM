'use strict';

document.addEventListener('DOMContentLoader', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  const left = (wall.clientWidth - spider.offsetWidth) / 2;
  const topOffset = (wall.clientHeight - spider.offsetHeight) / 2;

  spider.style.left = `${left}px`;
  spider.style.top = `${topOffset}px`;
});
