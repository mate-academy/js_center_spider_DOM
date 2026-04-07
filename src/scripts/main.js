'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function getSpiderPosition() {
  const width = wall.offsetWidth;
  const height = wall.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const x = Math.round(width / 2 - spiderWidth / 2) - 10;

  const y = Math.round(height / 2 - spiderHeight / 2) - 10;

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;

  return spider.getBoundingClientRect();
}

getSpiderPosition();
