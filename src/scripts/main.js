'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

if (spider && wall) {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const topPosition = (wallHeight - spiderHeight) / 2;
  const leftPosition = (wallWidth - spiderWidth) / 2;

  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
}
