'use strict';

const spider = document.querySelector('.spider');

const field = document.querySelector('.wall');

const spiderRect = spider.getBoundingClientRect();
const fieldRect = field.getBoundingClientRect();

const spiderLeft = (fieldRect.width - spiderRect.width)
  / 2 + fieldRect.x - spiderRect.x;
const spiderTop = (fieldRect.height - spiderRect.height)
  / 2 + fieldRect.y - spiderRect.y;

spider.style.left = `${spiderLeft}px`;
spider.style.top = `${spiderTop}px`;
