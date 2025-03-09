'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldWidth = field.offsetWidth;
const fieldHeight = field.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const spiderTopPosition = (fieldHeight - spiderHeight) / 2;
const spiderLeftPosition = (fieldWidth - spiderWidth) / 2;

spider.style.top = spiderTopPosition + 'px';
spider.style.left = spiderLeftPosition + 'px';
