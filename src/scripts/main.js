'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

window.addEventListener('load', () => {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const centerX = wallWidth / 2 - spiderWidth / 2;
  const centerY = wallHeight / 2 - spiderHeight / 2;

  spider.style.position = 'absolute';
  spider.style.left = centerX + 'px';
  spider.style.top = centerY + 'px';
});
