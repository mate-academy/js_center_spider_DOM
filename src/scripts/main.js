'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  wall.style.position = 'relative';

  spider.style.position = 'absolute';

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const left = (wallWidth - spiderWidth) / 2;
  const toP = (wallHeight - spiderHeight) / 2;

  spider.style.left = Math.round(left) + 'px';
  spider.style.top = Math.round(toP) + 'px';

  spider.style.margin = '0';
  spider.style.padding = '0';
  spider.style.transform = 'none';
}

centerSpider();

window.addEventListener('load', centerSpider);
window.addEventListener('resize', centerSpider);
