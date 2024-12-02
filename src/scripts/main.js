'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spiderImg = document.querySelector('img.spider');
  const wall = document.querySelector('.wall');

  const wallStyles = window.getComputedStyle(wall);
  const spiderStyles = window.getComputedStyle(spiderImg);

  const wallWidth = parseFloat(wallStyles.width);
  const wallHeight = parseFloat(wallStyles.height);
  const spiderWidth = parseFloat(spiderStyles.width);
  const spiderHeight = parseFloat(spiderStyles.height);

  const leftPos = (wallWidth - spiderWidth) / 2;
  const topPos = (wallHeight - spiderHeight) / 2;

  spiderImg.style.position = 'absolute';
  spiderImg.style.left = `${leftPos}px`;
  spiderImg.style.top = `${topPos}px`;
});
