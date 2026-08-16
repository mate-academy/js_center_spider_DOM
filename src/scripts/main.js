'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  const wallWidth = wall.clientWidth;
  const wallHeigth = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeigth = spider.offsetHeight;

  const leftSide = (wallWidth - spiderWidth) / 2;
  const topSide = (wallHeigth - spiderHeigth) / 2;

  spider.style.left = `${leftSide}px`;
  spider.style.top = `${topSide}px`;
}

centerSpider();
