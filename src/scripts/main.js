'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  function center() {
    wall.style.position = 'relative';
    spider.style.position = 'absolute';

    const leftSpider = (wall.clientWidth - spider.offsetWidth) / 2;
    const topSpider = (wall.clientHeight - spider.offsetHeight) / 2;

    spider.style.left = leftSpider + 'px';
    spider.style.top = topSpider + 'px';
  }

  if (!spider.complete) {
    spider.addEventListener('load', center);
  } else {
    center();
  }
});
