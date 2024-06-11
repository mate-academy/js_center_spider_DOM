'use strict';

window.onload = function () {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const fieldRect = field.getBoundingClientRect();
  const fieldWidth = fieldRect.width;
  const fieldHeight = fieldRect.height;

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const spiderTop = (fieldHeight - spiderHeight) / 2;
  const spiderLeft = (fieldWidth - spiderWidth) / 2;

  spider.style.position = 'absolute';
  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
};
