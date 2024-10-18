'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function getSpiderToCenter() {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const height = (wallRect.height - spiderRect.height) / 2;
  const width = (wallRect.width - spiderRect.width) / 2;

  spider.style.top = `${height}px`;
  spider.style.left = `${width}px`;
}

getSpiderToCenter();
