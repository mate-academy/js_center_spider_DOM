'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const sW = spider.offsetWidth;
const sH = spider.offsetHeight;

const wW = wall.offsetWidth;
const wH = wall.offsetHeight;

spider.style.left = `${wW / 2 - sW / 2}px`;
spider.style.top = `${wH / 2 - sH / 2}px`;
