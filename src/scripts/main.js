'use strict';

const field = document.getElementsByClassName('wall')[0];
const spider = document.getElementsByClassName('spider')[0];

const fieldWidth = field.offsetWidth;
const fieldHeight = field.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centerX = (fieldWidth - spiderWidth) / 2;
const centerY = (fieldHeight - spiderHeight) / 2;

spider.style.top = `${centerY}px`;
spider.style.left = `${centerX}px`;
