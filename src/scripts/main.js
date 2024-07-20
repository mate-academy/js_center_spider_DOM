'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const positionTop = (wall.clientHeight - spider.clientHeight) / 2;
const positionLeft = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = positionTop + 'px';
spider.style.left = positionLeft + 'px';
