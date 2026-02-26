'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const positionLeft = (wall.offsetWidth - spider.offsetWidth) / 2;
const positionTop = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.top = positionTop + 'px';
spider.style.left = positionLeft + 'px';
