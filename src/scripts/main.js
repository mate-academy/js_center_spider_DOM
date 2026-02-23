'use strict';

const wall = document.querySelector('.wall');

if (wall === null) {
  throw new Error('No items found');
}

const spider = document.querySelector('.spider');

if (spider === null) {
  throw new Error('No items found');
}

function centerSpider() {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const calcLeft = (wallWidth - spiderWidth) / 2;
  const calcTop = (wallHeight - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${calcLeft}px`;
  spider.style.top = `${calcTop}px`;
}

window.addEventListener('load', () => {
  wall.style.position = wall.style.position || 'relative';
  centerSpider();
});

window.addEventListener('resize', () => {
  centerSpider();
});
