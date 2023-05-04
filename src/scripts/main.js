'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

// *** Solution 1 ***
/*
 wall.style.display = 'flex';
 wall.style.justifyContent = 'center';
 wall.style.alignItems = 'center';
 spider.style.position = 'static';
 */

// *** Solution 2 ***
const wallStyle = getComputedStyle(wall);
const spiderStyle = getComputedStyle(spider);
const wallHalfHeigt = px2number(wallStyle.getPropertyValue('height')) / 2;
const wallHalfWidth = px2number(wallStyle.getPropertyValue('width')) / 2;
const spiderOffsetLeft = px2number(spiderStyle.getPropertyValue('height')) / 2;
const spiderOffsetTop = px2number(spiderStyle.getPropertyValue('width')) / 2;

spider.style.top = (wallHalfHeigt - spiderOffsetTop) + 'px';
spider.style.left = (wallHalfWidth - spiderOffsetLeft) + 'px';

function px2number(str) {
  const pos = str.indexOf('p');

  return +str.slice(0, pos);
};
