'use strict';

// write code here
document.addEventListener('DOMContentLoaded', function () {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderCenterTop = (wallRect.height - spiderRect.height) / 2;
  const spiderCenterLeft = (wallRect.width - spiderRect.width) / 2;

  spider.style.top = `${spiderCenterTop}px`;
  spider.style.left = `${spiderCenterLeft}px`;
});
