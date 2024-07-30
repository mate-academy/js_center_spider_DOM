'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallWight = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderHeight = spider.clientHeight;
  const spiderWight = spider.clientWidth;

  wall.style.position = 'relative';

  const up = (wallHeight - spiderHeight) / 2;
  const left = (wallWight - spiderWight) / 2;

  spider.style.top = `${up}px`;
  spider.style.left = `${left}px`;
});
