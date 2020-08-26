'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${(wall.clientWidth - spider.width) / 2}px`;
spider.style.left = `${(wall.clientHeight - spider.height) / 2}px`;
// write code here
