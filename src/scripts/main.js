'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const centerSpider = () => {
    if (!spider.complete) {
      return;
    }

    const topSpider = Math.round((wall.clientHeight - spider.offsetHeight) / 2);
    const leftSpider = Math.round((wall.clientWidth - spider.offsetWidth) / 2);

    spider.style.top = `${topSpider}px`;
    spider.style.left = `${leftSpider}px`;
  };

  const ensureAndCenter = () => {
    if (spider.complete) {
      centerSpider();
    }
  };

  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener(
      'load',
      () => {
        centerSpider();
        window.addEventListener('resize', centerSpider);
      },
      { once: true },
    );
  }

  window.addEventListener('resize', ensureAndCenter);
});
