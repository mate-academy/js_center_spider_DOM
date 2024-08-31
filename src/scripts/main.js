'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHalfWidth = wall.clientWidth / 2 - spider.offsetWidth / 2;
const wallHalfHeight = wall.clientHeight / 2 - spider.offsetHeight / 2;

spider.style.left = wallHalfWidth + 'px';
spider.style.top = wallHalfHeight + 'px';
