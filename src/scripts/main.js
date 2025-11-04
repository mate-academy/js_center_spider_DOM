'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerTop = (wall.clientHeight - spider.clientHeight) / 2;
const centerLeft = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = centerTop + 'px';
spider.style.left = centerLeft + 'px';
