'use strict';

const spider = document.querySelector('.spider');

const wall = document.querySelector('.wall');

const leftStyle = (wall.clientWidth - spider.offsetWidth) / 2;
const topStyle = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.left = leftStyle + 'px';
spider.style.top = topStyle + 'px';
