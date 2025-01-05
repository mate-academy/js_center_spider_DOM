'use strict';

// write code here
const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldWidth = field.offsetWidth;
const fieldHeight = field.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const leftPos = (fieldWidth - spiderWidth) / 2;
const topPos = (fieldHeight - spiderHeight) / 2;

spider.style.left = `${leftPos}px`;
spider.style.top = `${topPos}px`;
