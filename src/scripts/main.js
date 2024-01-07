'use strict';

const field = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const fieldRect = field.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const newTop = (fieldRect.height - spiderRect.height) / 2;
const newLeft = (fieldRect.width - spiderRect.width) / 2;

spider.style.position = 'absolute';
spider.style.top = newTop + 'px';
spider.style.left = newLeft + 'px';
