'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const fieldWidth = field.offsetWidth;
const fieldHeight = field.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const centerX = (fieldWidth - spiderWidth) / 2;
const centerY = (fieldHeight - spiderHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
