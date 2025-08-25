'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (spider.complete) {
    centerSpider(wall, spider);
  } else {
    spider.addEventListener('load', () => centerSpider(wall, spider));
  }

  window.addEventListener('resize', () => centerSpider(wall, spider));
});

function centerSpider(wall, spider) {
  const leftPos = wall.clientWidth / 2 - spider.clientWidth / 2;
  const topPos = wall.clientHeight / 2 - spider.clientHeight / 2;

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
}
