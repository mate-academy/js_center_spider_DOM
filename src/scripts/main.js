'use strict';

// write code here
const spider = document.querySelector('.spider');

const parentElem = spider.parentElement;

const parentWidth = parentElem.clientWidth;
const parentHeight = parentElem.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const newLeft = (parentWidth - spiderWidth) / 2;
const newTop = (parentHeight - spiderHeight) / 2;

spider.style.left = `${newLeft}px`;
spider.style.top = `${newTop}px`;
