'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const l = wallRect.left + (wallWidth - spiderWidth) / 2;
  const t = wallRect.top + (wallHeight - spiderHeight) / 2;

  spider.style.position = 'fixed';
  spider.style.left = l + 'px';
  spider.style.top = t + 'px';
});
