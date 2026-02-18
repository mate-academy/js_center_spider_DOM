'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  spider.style.position = 'absolute';
  spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
  spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
});
