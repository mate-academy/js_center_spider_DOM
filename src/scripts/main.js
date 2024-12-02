'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (spider && field) {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const fieldWidth = field.clientWidth;
  const fieldHeight = field.clientHeight;

  const posTop = (fieldHeight - spiderHeight) / 2;
  const posLeft = (fieldWidth - spiderWidth) / 2;

  spider.style.left = `${posLeft}px`;
  spider.style.top = `${posTop}px`;
}
