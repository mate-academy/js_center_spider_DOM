'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const sTop = (wall.offsetHeight / 2) - (spider.offsetHeight / 2);
  const sLeft = (wall.offsetWidth / 2) - (spider.offsetWidth / 2);

  spider.style.top = sTop + 'px';
  spider.style.left = sLeft + 'px';
}

centerSpider();

