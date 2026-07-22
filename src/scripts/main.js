'use strict';

// write code here
const div = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const divWidth = div.clientWidth;
const divHeight = div.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const left = (divWidth - spiderWidth) / 2;
const topPosition = (divHeight - spiderHeight) / 2;

div.style.position = 'relative';
spider.style.position = 'absolute';

spider.style.left = left + 'px';
spider.style.top = topPosition + 'px';
