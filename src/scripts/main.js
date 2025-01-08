'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallInnerWidth = wall.clientWidth;
  const wallInnerHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const centerX = (wallInnerWidth - spiderWidth) / 2;
  const centerY = (wallInnerHeight - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
});
