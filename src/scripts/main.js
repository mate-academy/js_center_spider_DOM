'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const left = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.left = left + 'px';
spider.style.top = left + 'px';

// write code here
