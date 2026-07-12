'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallStyles = getComputedStyle(wall);
const borderLeftRight =
  wallStyles.borderRightWidth + wallStyles.borderLeftWidth;
const borderTopBottom =
  wallStyles.borderTopWidth + wallStyles.borderBottomWidth;
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const wightSpider = spider.offsetWidth;
const heightSpider = spider.offsetHeight;
const centerWidth = (wallWidth - wightSpider - borderLeftRight) / 2;
const centerHeight = (wallHeight - heightSpider - borderTopBottom) / 2;

spider.style.left = centerWidth + 'px';
spider.style.top = centerHeight + 'px';
