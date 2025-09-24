'use strict';

const spider = document.querySelector('.spider');

const centerSpider = () => {
  const wall = document.querySelector('.wall');

  if (!wall || !spider) return;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  spider.style.position = 'absolute';
  wall.style.position = 'relative';

  spider.style.top = wallHeight / 2 - spiderHeight / 2 + 'px';
  spider.style.left = wallWidth / 2 - spiderWidth / 2 + 'px';
};

if (spider.complete) {
  centerSpider();
} else {
  spider.addEventListener('load', centerSpider);
}

