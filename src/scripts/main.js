'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${((wall.offsetHeight - spider.offsetHeight) / 2)}px`;
spider.style.left = `${((wall.offsetWidth - spider.offsetWidth) / 2)}px`;
