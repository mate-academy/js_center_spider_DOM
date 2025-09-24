'use strict';

const positionedSpider = () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  function centerSpider() {
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;
    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;

    const positionX = (wallWidth - spiderWidth) / 2;
    const positionY = (wallHeight - spiderHeight) / 2;

    spider.style.left = positionX + 'px';
    spider.style.top = positionY + 'px';
  }

  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }

  window.addEventListener('resize', () => {
    centerSpider();
  });
};

document.addEventListener('DOMContentLoaded', positionedSpider);
