'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  function moveSpider() {
    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    const x = (wallWidth - spiderWidth) / 2;
    const y = (wallHeight - spiderHeight) / 2;

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }

  moveSpider();
  window.addEventListener('resize', moveSpider);
});
