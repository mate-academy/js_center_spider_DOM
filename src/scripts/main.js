'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
// get all wall's styles
const wallStyles = getComputedStyle(wall);
// get border width of the wall
const wallBorderWidth = parseFloat(wallStyles.borderWidth);
// get content width of the wall
const wallContentWidth = wall.offsetWidth - wallBorderWidth * 2;
// get content height of the wall
const wallContentHeight = wall.offsetHeight - wallBorderWidth * 2;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.left = `${(wallContentWidth - spiderWidth) / 2}px`;
spider.style.top = `${(wallContentHeight - spiderHeight) / 2}px`;
