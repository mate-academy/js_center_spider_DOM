'use strict';

// write code here

function moveSpiderToCenter() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  function centerSpider() {
    const centerX = wall.clientWidth / 2;
    const centerY = wall.clientHeight / 2;

    const leftSpider = centerX - spider.offsetWidth / 2;
    const topSpider = centerY - spider.offsetHeight / 2;

    spider.style.left = `${leftSpider}px`;
    spider.style.top = `${topSpider}px`;
  }

  if (spider.complete && spider.offsetWidth > 0) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }
}

moveSpiderToCenter();
