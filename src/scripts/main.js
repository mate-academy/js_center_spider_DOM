'use strict';

// write code here
const div = document.querySelector('.wall');
const spider = document.querySelector('img');

const divWidth = div.offsetWidth;
const divHeight = div.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const left = (divWidth - spiderWidth) / 2;
const topPosition = (divHeight - spiderHeight) / 2;

div.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.left = left + 'px';
spider.style.top = topPosition + 'px';
