'use strict';

// write code here
window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'reletive';
  }

  function centerSpider() {
    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    if (!wallWidth || !wallHeight || !spiderWidth || !spiderHeight) {
      return;
    }

    const leftPos = (wallWidth - spiderWidth) / 2;
    const topPos = (wallHeight - spiderHeight) / 2;

    spider.style.position = 'absolute';
    spider.style.left = `${leftPos}px`;
    spider.style.top = `${topPos}px`;
  }

  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }
});
