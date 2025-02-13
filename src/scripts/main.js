'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const centerX = (containerWidth - spider.offsetWidth) / 2;
  const centerY = (containerHeight - spider.offsetHeight) / 2;

  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
});
