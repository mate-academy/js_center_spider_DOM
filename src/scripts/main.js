'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const topMargin = (wall.clientHeight - spider.clientHeight) / 2;
const leftMargin = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = topMargin + 'px';
spider.style.left = leftMargin + 'px';
