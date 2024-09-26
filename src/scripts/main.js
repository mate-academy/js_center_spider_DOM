'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function positionSpider() {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const leftPosition = (wallWidth - spiderWidth) / 2;
  const topPosition = (wallHeight - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
}

positionSpider();
