'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.style.position = 'relative';

  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }

  function centerSpider() {
    const left = (wall.offsetWidth - spider.offsetWidth) / 2;
    const topOffset = (wall.offsetHeight - spider.offsetHeight) / 2;

    spider.style.position = 'absolute';
    spider.style.top = `${topOffset}px`;
    spider.style.left = `${left}px`;
  }
});
