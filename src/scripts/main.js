'use strict';

const spider = document.querySelector('.spider');
const field = document.querySelector('.wall');

const height = field.clientHeight;
const width = field.clientWidth;

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const outputHeight = (height - spiderHeight) / 2;
const outputWidth = (width - spiderWidth) / 2;

spider.style.top = `${outputHeight}px`;
spider.style.left = `${outputWidth}px`;
// write code here
