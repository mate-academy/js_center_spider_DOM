'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function moveSpider() {
  const wallW = wall.clientWidth;
  const wallH = wall.clientHeight;
  const spiderW = spider.offsetWidth;
  const spiderH = spider.offsetHeight;

  const x = (wallW - spiderW) / 2;
  const y = (wallH - spiderH) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
}

window.addEventListener('load', moveSpider);
window.addEventListener('resize', moveSpider);
