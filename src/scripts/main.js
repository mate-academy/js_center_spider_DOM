'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const offsetX = (wall.clientWidth - spider.clientWidth) / 2;
const offsetY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
