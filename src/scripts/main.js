'use strict';

window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const leftPosition = (wallWidth - spiderWidth) / 2;
  const topPosition = (wallHeight - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
