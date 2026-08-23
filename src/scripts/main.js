'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerLeft = wall.clientWidth / 2 - spider.clientWidth / 2;
const centerTop = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.left = centerLeft + 'px';
spider.style.top = centerTop + 'px';
