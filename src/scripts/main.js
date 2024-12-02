'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Calculate the center position
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const centerX = (wallRect.width - spiderRect.width) / 2;
  const centerY = (wallRect.height - spiderRect.height) / 2;

  // Set the spider's position
  spider.style.position = 'absolute';
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
});
