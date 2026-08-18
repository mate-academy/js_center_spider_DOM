'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftP = (wall.clientWidth - spider.offsetWidth) / 2;
const topP = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.left = leftP + 'px';
spider.style.top = topP + 'px';
