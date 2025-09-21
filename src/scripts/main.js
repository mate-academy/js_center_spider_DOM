'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  const left = (wall.clientWidth - spider.clientWidth) / 2;
  const topPos = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.left = `${left}px`;
  spider.style.top = `${topPos}px`;
}

centerSpider();
