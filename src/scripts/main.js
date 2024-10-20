'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const newLeft = Math.round(wall.offsetWidth - spider.clientWidth) / 2;
const newTop = Math.round(wall.offsetHeight - spider.clientHeight) / 2;

spider.style.left = `${newLeft}px`;
spider.style.top = `${newTop}px`;
