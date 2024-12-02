'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallStyles = window.getComputedStyle(wall);
const wallRect = wall.getBoundingClientRect();

const wallBorderX =
  parseInt(wallStyles.borderLeftWidth) + parseInt(wallStyles.borderRightWidth);
const wallBorderY =
  parseInt(wallStyles.borderTopWidth) + parseInt(wallStyles.borderBottomWidth);

const wallCenterX = (wallRect.width - wallBorderX) / 2;
const wallCenterY = (wallRect.height - wallBorderY) / 2;

spider.style.left = `${wallCenterX}px`;
spider.style.top = `${wallCenterY}px`;
spider.style.transform = 'translate(-50%, -50%)';
