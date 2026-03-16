'use strict';

const wall = document.getElementsByClassName('wall')[0];
const spider = document.getElementsByClassName('spider')[0];

const centerX = wall.clientWidth / 2 - spider.clientWidth / 2;
const centerY = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
