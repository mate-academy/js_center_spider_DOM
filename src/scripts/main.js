'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function positionSpider() {
  const leftPosition = (wall.clientWidth - spider.offsetWidth) / 2;

  const topPosition = (wall.clientHeight / 2 - spider.offsetHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
}
positionSpider();
