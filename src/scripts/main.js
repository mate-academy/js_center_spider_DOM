'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerSpider = () => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const posLeft = (wallRect.width - spiderRect.width) / 2;
  const posTop = (wallRect.height - spiderRect.height) / 2;

  spider.style.left = `${posLeft}px`;
  spider.style.top = `${posTop}px`;
};

window.addEventListener('load', centerSpider);
