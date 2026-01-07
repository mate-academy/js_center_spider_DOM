'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldMore = field.getBoundingClientRect();
const spiderMore = spider.getBoundingClientRect();

const left = (fieldMore.width - spiderMore.width) / 2;
const topValue = (fieldMore.height - spiderMore.height) / 2;

spider.style.position = 'absolute';
spider.style.left = left + 'px';
spider.style.top = topValue + 'px';
