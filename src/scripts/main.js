'use strict';

// write code here
function placeSpiderInCenter(spider, wall) {
  const posX = (wall.clientWidth - spider.offsetWidth) / 2;
  const posY = (wall.clientHeight - spider.offsetHeight) / 2;

  spider.style.left = `${posX}px`;
  spider.style.top = `${posY}px`;
}

const spiderElement = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

placeSpiderInCenter(spiderElement, wallElement);
