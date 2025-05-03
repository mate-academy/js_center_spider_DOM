'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const sWidth = spider.offsetWidth;
const sHeight = spider.offsetHeight;
const wWidth = wall.offsetWidth;
const wHeight = wall.offsetHeight;
const x = (wWidth - sWidth) / 2;
const y = (wHeight - sHeight) / 2;

spider.style.left = x + 'px';
spider.style.top = y + 'px';
