'use strict';

const spider = document.querySelector('.spider');
const field = document.querySelector('.wall');

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const spiderLeft = (fieldWidth - spiderWidth) / 2;
const spiderTop = (fieldHeight - spiderHeight) / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
