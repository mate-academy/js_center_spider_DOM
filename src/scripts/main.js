'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const topMargin = wall.clientHeight / 2 - spider.clientHeight / 2;
  const leftMargin = wall.clientWidth / 2 - spider.clientWidth / 2;

  spider.style.top = topMargin + 'px';
  spider.style.left = leftMargin + 'px';
}

centerSpider();
