'use strict';

const field = document.querySelector('.wall');
const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.left = `${(fieldWidth - spiderWidth) / 2}px`;
spider.style.top = `${(fieldHeight - spiderHeight) / 2}px`;
