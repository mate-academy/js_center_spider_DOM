'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallX = (wall.clientWidth - spider.clientWidth) / 2;
const wallY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = wallX + 'px';
spider.style.top = wallY + 'px';
