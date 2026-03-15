'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function moveSpider() {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const x = (wallRect.width - spiderRect.width) / 2;
  const y = (wallRect.height - spiderRect.height) / 2;

  spider.style.transform = `translate(${x}px, ${y}px)`;
}

moveSpider();
