'use strict';

// write code here
const wall = document.querySelector('.wall');
const centerX = wall.clientWidth / 2;
const centerY = wall.clientHeight / 2;
const spider = document.querySelector('.spider');

function centerSpider() {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const spiderX = centerX - spiderWidth / 2;
  const spiderY = centerY - spiderHeight / 2;

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
}

centerSpider();
