'use strict';

const field = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const widthCenter = (fieldWidth - spiderWidth) / 2;
const heightCenter = (fieldHeight - spiderHeight) / 2;

spider.style.left = widthCenter + 'px';
spider.style.top = heightCenter + 'px';
