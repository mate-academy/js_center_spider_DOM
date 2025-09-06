'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.addEventListener('load', centerSpider);

function centerSpider() {
  if (!wall || !spider) {
    return;
  }

  if (spider.clientWidth > 0 && wall.clientWidth > 0) {
    return;
  }
  wall.style.position = wall.style.position || 'relative';
  spider.style.position = 'absolute';
  spider.style.left = (wall.clientWidth - spider.clientWidth) / 2 + 'px';
  spider.style.top = (wall.clientHeight - spider.clientHeight) / 2 + 'px';
}
