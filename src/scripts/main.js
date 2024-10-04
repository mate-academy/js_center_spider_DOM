'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerWidth = (wall.clientWidth - spider.offsetWidth) / 2;
const centerHeight = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.top = centerHeight + 'px';
spider.style.left = centerWidth + 'px';
