'use strict';

// write code here
const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const positionLeft = field.clientWidth / 2 - spider.clientWidth / 2;
const positionTop = field.clientHeight / 2 - spider.clientHeight / 2;

spider.style.left = positionLeft + 'px';
spider.style.top = positionTop + 'px';
