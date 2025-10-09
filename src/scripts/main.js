'use strict';

function centerElement(wall, spider) {
  if (!wall || !spider) {
    return;
  }

  const topValue = Math.round(wall.clientHeight / 2 - spider.clientHeight / 2);
  const leftValue = Math.round(wall.clientWidth / 2 - spider.clientWidth / 2);

  wall.style.position = 'relative';
  spider.style.position = 'absolute';
  spider.style.top = `${topValue}px`;
  spider.style.left = `${leftValue}px`;
}

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  centerElement(wall, spider);
});
