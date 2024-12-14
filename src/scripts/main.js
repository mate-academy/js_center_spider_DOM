'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.top = (wall.clientHeight - spider.clientHeight) / 2 + 'px';
  spider.style.left = (wall.clientWidth - spider.clientWidth) / 2 + 'px';
}

centerSpider();
