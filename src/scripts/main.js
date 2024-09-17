'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

spider.style.top = `${(wallHeight - spider.clientHeight) / 2}px`;
spider.style.left = `${(wallWidth - spider.clientWidth) / 2}px`;
