'use strict';

window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const centerX = (wallWidth - spiderWidth) / 2;
  const centerY = (wallHeight - spiderHeight) / 2;

  spider.style.left = centerX + 'px';
  spider.style.top = centerY + 'px';
});
