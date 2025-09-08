'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const leftIndentCalculation = (wallWidth - spiderWidth) / 2;
  const topIndentCalculation = (wallHeight - spiderHeight) / 2;

  if (getComputedStyle(wall).position !== 'relative') {
    wall.style.position = 'relative';
  }

  if (getComputedStyle(spider).position !== 'absolute') {
    spider.style.position = 'absolute';
  }

  spider.style.left = leftIndentCalculation + 'px';
  spider.style.top = topIndentCalculation + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');

  if (!spider) {
    return;
  }

  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }

  window.addEventListener('resize', centerSpider);
});
