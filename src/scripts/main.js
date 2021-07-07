'use strict';

function centerSpider() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  window.setTimeout(() => {
    spider.style.top = `${wall.clientHeight / 2 - spider.clientHeight / 2}px`;
    spider.style.left = `${wall.clientWidth / 2 - spider.clientWidth / 2}px`;
  }, 0);
}

centerSpider();
