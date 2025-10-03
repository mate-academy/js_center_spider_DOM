'use strict';

window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  function centerSpider() {
    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    const left = Math.round((wallWidth - spiderWidth) / 2);
    const topPos = Math.round((wallHeight - spiderHeight) / 2);

    spider.style.position = 'absolute';
    spider.style.left = `${left}px`;
    spider.style.top = `${topPos}px`;
  }

  centerSpider();
  window.addEventListener('resize', centerSpider);
});
