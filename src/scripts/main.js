'use strict';

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const field = document.querySelector('.wall');
const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

spider.style.marginLeft
  = `${(fieldWidth / 2) - (spiderWidth / 2)}px`;

spider.style.marginTop
  = `${(fieldHeight / 2) - (spiderHeight / 2)}px`;
