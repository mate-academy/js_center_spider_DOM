'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const spiderLeft = (wallWidth - spiderWidth) / 2;
  const spiderTop = (wallHeight - spiderHeight) / 2;

  // i dont write here position relative for the wall because we have it in scss
  spider.style.position = 'absolute';
  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
}

window.onload = centerSpider;
window.onresize = centerSpider;
