'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallStyles = getComputedStyle(wall);

const heightToCenter = (wall.getBoundingClientRect().height
  - (parseInt(wallStyles.borderTopWidth) * 2)) / 2
  - spider.getBoundingClientRect().height / 2;
const widthToCenter = (wall.getBoundingClientRect().width
  - (parseInt(wallStyles.borderLeftWidth) * 2)) / 2
  - spider.getBoundingClientRect().width / 2;

spider.style.top = heightToCenter + 'px';
spider.style.left = widthToCenter + 'px';
