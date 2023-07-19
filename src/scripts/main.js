'use strict';

const field = document.querySelector('.field');
const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.left = (fieldWidth / 2 - spiderWidth / 2) + 'px';
spider.style.top = (fieldHeight / 2 - spiderHeight / 2) + 'px';
