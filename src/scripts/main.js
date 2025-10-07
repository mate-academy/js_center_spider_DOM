'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  const centerSpider = () => {
    const top1 = (wall.clientHeight - spider.offsetHeight) / 2;
    const left = (wall.clientWidth - spider.offsetWidth) / 2;

    spider.style.top = `${top1}px`;
    spider.style.left = `${left}px`;
  };

  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }
});
