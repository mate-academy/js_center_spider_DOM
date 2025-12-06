'use strict';

window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  function centerSpider() {
    const centerX = (wall.clientWidth - spider.clientWidth) / 2;
    const centerY = (wall.clientHeight - spider.clientHeight) / 2;

    spider.style.left = `${centerX}px`;
    spider.style.top = `${centerY}px`;
  }

  centerSpider();

  window.addEventListener('resize', centerSpider);
});
