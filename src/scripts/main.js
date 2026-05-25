'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallStyle = getComputedStyle(wall);
  const paddingLeft = parseFloat(wallStyle.paddingLeft);
  const paddingTop = parseFloat(wallStyle.paddingTop);

  const wallInnerWidth =
    wall.clientWidth - paddingLeft - parseFloat(wallStyle.paddingRight);
  const wallInnerHeight =
    wall.clientHeight - paddingTop - parseFloat(wallStyle.paddingBottom);

  const centerLeft = paddingLeft + (wallInnerWidth - spider.offsetWidth) / 2;
  const centerTop = paddingTop + (wallInnerHeight - spider.offsetHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${centerLeft}px`;
  spider.style.top = `${centerTop}px`;
});
