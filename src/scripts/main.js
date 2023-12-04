'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const topPosition = (wallHeight - spiderHeight) / 2;
  const leftPosition = (wallWidth - spiderWidth) / 2;

  spider.style.top = `${topPosition - 10}px`;
  spider.style.left = `${leftPosition - 10}px`;
});
