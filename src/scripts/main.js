'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const style = getComputedStyle(wall);

spider.style.top = `${parseFloat(style.height) / 2}px`;
spider.style.left = `${parseFloat(style.width) / 2}px`;
spider.style.transform = 'translate(-50%, -50%)';
