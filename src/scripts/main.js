'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  const fieldWidth = field.clientWidth;
  const fieldHeight = field.clientHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const newLeft = (fieldWidth - spiderWidth) / 2;
  const newTop = (fieldHeight - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
}

window.addEventListener('load', centerSpider);
window.addEventListener('resize', centerSpider);
