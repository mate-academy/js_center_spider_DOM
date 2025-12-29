'use strict';

// write code here
const container = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = (container.offsetWidth - spider.offsetWidth) / 2;
const centerY = (container.offsetHeight - spider.offsetHeight) / 2;

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
