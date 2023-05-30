'use strict';

document.addEventListener('click', even => {
  if (even.target.className !== 'wall') {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let spiderX = even.offsetX - (spider.clientWidth / 2);
  let spiderY = even.offsetY - (spider.clientHeight / 2);

  if (spiderX > maxX) {
    spiderX = maxX;
  }

  if (spiderY > maxY) {
    spiderY = maxY;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }
  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});

window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const centerX = (wall.clientWidth - spider.clientWidth) / 2;
  const centerY = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
});
