'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

if (!spider || !wall) {
  process.exit(1);
} else {
  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }
  spider.style.position = 'absolute';

  const centerSpider = () => {
    const leftStyle = (wall.clientWidth - spider.offsetWidth) / 2;
    const topStyle = (wall.clientHeight - spider.offsetHeight) / 2;

    spider.style.left = leftStyle + 'px';
    spider.style.top = topStyle + 'px';
  };

  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }

  window.addEventListener('resize', centerSpider);
}
