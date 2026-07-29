'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallStyles = getComputedStyle(wall);

const borderX =
  parseFloat(wallStyles.borderLeftWidth) +
  parseFloat(wallStyles.borderRightWidth);
const borderY =
  parseFloat(wallStyles.borderTopWidth) +
  parseFloat(wallStyles.borderBottomWidth);

const freeSpaceX = wall.offsetWidth - borderX - spider.offsetWidth;
const freeSpaceY = wall.offsetHeight - borderY - spider.offsetHeight;

spider.style.left = `${freeSpaceX / 2}px`;
spider.style.top = `${freeSpaceY / 2}px`;
