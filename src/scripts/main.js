'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.left = `${(fieldWidth - spiderWidth) / 2}px`;
spider.style.top = `${(fieldHeight - spiderHeight) / 2}px`;
