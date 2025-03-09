'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;
  const spider = document.querySelector('.spider');
  const spiderHeight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;

  spider.style.left = Math.round(wallWidth / 2 - spiderWidth / 2) + 'px';
  spider.style.top = Math.round(wallHeight / 2 - spiderHeight / 2) + 'px';
}

centerSpider();
