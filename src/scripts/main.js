'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall) {
    // eslint-disable-next-line no-console
    console.error('`.wall` element not found');

    return;
  }

  if (!spider) {
    // eslint-disable-next-line no-console
    console.error('`.spider` element not found');

    return;
  }

  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  function measureAndCenter() {
    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;

    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    const leftPos = (wallWidth - spiderWidth) / 2;
    const topPos = (wallHeight - spiderHeight) / 2;

    spider.style.position = 'absolute';
    spider.style.left = `${leftPos}px`;
    spider.style.top = `${topPos}px`;
  }

  if (spider.complete) {
    measureAndCenter();
  } else {
    spider.addEventListener('load', measureAndCenter);
  }

  window.addEventListener('resize', measureAndCenter);
});
