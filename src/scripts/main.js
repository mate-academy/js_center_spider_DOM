'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
