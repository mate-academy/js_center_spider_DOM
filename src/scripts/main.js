'use strict';

const field = document.querySelector('.wall');
const spider = field.querySelector('.spider');

const fieldHeight = field.getBoundingClientRect().height / 2;
const fieldWidth = field.getBoundingClientRect().width / 2;
const spiderHeight = spider.getBoundingClientRect().height / 2;
const spiderWidth = spider.getBoundingClientRect().width / 2;

spider.style.top = `${fieldHeight - spiderHeight}px`;
spider.style.left = `${fieldWidth - spiderWidth}px`;
