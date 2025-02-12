'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const centerX = (wallWidth - spider.offsetWidth) / 2;
const centerY = (wallHeight - spider.offsetHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
