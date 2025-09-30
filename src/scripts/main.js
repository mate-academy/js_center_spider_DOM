'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Guard clauses
  if (!wall || !spider) {
    console.warn('Wall or spider element not found');
    return;
  }

  // Ensure wall is a positioning context
  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  // Spider should be absolutely positioned inside the wall
  spider.style.position = 'absolute';

  const centerSpider = () => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const centerX = (wallRect.width - spiderRect.width) / 2;
    const centerY = (wallRect.height - spiderRect.height) / 2;

    spider.style.left = centerX + 'px';
    spider.style.top = centerY + 'px';
  };

  // Wait until the spider image is fully loaded
  if (spider.complete) {
    centerSpider();
  } else {
    spider.addEventListener('load', centerSpider);
  }

  // Recalculate on resize
  window.addEventListener('resize', centerSpider);
});
