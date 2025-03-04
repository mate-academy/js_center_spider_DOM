'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallHeight = parseInt(getComputedStyle(wall).height);
  const wallWidth = parseInt(getComputedStyle(wall).width);
  const spiderHeight = parseInt(getComputedStyle(spider).height);
  const spiderWidth = parseInt(getComputedStyle(spider).width);

  spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
  spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
});
