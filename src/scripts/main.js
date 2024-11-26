'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  const centerTop = (wallSize.height - spiderSize.height) / 2;
  const centerLeft = (wallSize.width - spiderSize.width) / 2;

  spider.style.position = 'relative';
  spider.style.top = `${centerTop}px`;
  spider.style.left = `${centerLeft}px`;
});
