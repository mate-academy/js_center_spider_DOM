'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');


const leftPoint = (wall.offsetWidth - spider.offsetWidth) / 2;
const topPoint = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.top = topPoint + 'px';
spider.style.left = leftPoint + 'px';

