'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const wallCenterX = wallRect.width / 2;
  const wallCenterY = wallRect.height / 2;

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;
  const spiderOffsetX = wallCenterX - spiderWidth / 2;
  const spiderOffsetY = wallCenterY - spiderHeight / 2;

  spider.style.left = `${spiderOffsetX}px`;
  spider.style.top = `${spiderOffsetY}px`;
});
