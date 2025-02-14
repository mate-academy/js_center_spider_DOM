'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallStyles = getComputedStyle(wall);
  const borderSize = parseFloat(wallStyles.borderWidth);

  const wallHeight = wall.getBoundingClientRect().height;
  const wallWidth = wall.getBoundingClientRect().width;
  const spiderHeight = spider.getBoundingClientRect().height;
  const spiderWidth = spider.getBoundingClientRect().width;

  spider.style.top = `${(wallHeight - spiderHeight) / 2 - borderSize}px`;
  spider.style.left = `${(wallWidth - spiderWidth) / 2 - borderSize}px`;
});
