'use strict';

const block = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = parseInt(window.getComputedStyle(spider).width);
const blockWidth = parseInt(window.getComputedStyle(block).width);
const middle = (blockWidth - spiderWidth) / 2;

spider.style.top = `${middle}px`;
spider.style.left = `${middle}px`;
