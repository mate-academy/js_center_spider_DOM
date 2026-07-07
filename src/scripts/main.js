'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const leftPosition = (wallWidth - spiderWidth) / 2;
  const topPosition = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
