'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

if (wall) {
  const wallWidth = wall.clientWidth;

  spider.style.top = wallWidth / 2 - spider.offsetHeight / 2 + 'px';
  spider.style.left = wallWidth / 2 - spider.offsetHeight / 2 + 'px';
}
