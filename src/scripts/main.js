'use strict';

// write code here
const spider = document.querySelector('img');
const wall = document.querySelector('div');

spider.style.top = `${(wall.clientHeight - spider.offsetHeight) / 2}px`;
spider.style.left = `${(wall.clientWidth - spider.offsetWidth) / 2}px`;
