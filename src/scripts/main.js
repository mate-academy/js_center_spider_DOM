'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function centerSpider() {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const topPosition = (wallRect.height - spiderRect.height) / 2;
  const left = (wallRect.width - spiderRect.width) / 2;

  spider.style.position = 'apsolut';
  spider.style.left = `${left}px`;
  spider.style.top = `${topPosition}px`;
}

centerSpider();

window.addEventListener('resize', centerSpider);
