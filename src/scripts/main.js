'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallComputedPos = getComputedStyle(wall).position;

  if (wallComputedPos === 'static') {
    wall.style.position = 'relative';
  }

  spider.style.position = 'absolute';

  function centerSpider() {
    const leftPosition = (wall.clientWidth - spider.offsetWidth) / 2;
    const topPosition = (wall.clientHeight - spider.offsetHeight) / 2;

    spider.style.left = `${leftPosition}px`;
    spider.style.top = `${topPosition}px`;
  }

  if (spider.complete) {
    centerSpider();

    return;
  }

  spider.addEventListener('load', centerSpider);

  window.addEventListener('resize', centerSpider);
});
