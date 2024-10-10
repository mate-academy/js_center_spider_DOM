'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const spiderLeft = (fieldWidth - spiderWidth) / 2;
const spiderTop = (fieldHeight - spiderHeight) / 2;

spider.style.top = `${spiderLeft}px`;
spider.style.left = `${spiderTop}px`;
