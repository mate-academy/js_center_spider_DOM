'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  function centerSpider() {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const wallWidth = wallRect.width;
    const wallHeight = wallRect.height;
    const spiderWidth = spiderRect.width;
    const spiderHeight = spiderRect.height;

    const spiderX = (wallWidth - spiderWidth) / 2;
    const spiderY = (wallHeight - spiderHeight) / 2;

    spider.style.left = spiderX + 'px';
    spider.style.top = spiderY + 'px';
  }

  centerSpider();
  window.addEventListener('resize', centerSpider);
});
