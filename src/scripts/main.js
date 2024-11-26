'use strict';

const centerSpider = () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    // console.error('Elements with classes "wall" or "spider" are not found.');

    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const centerX = (wallRect.width - spiderRect.width) / 2;
  const centerY = (wallRect.height - spiderRect.height) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
};

centerSpider();
