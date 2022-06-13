'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const sizeWidth = wall.offsetWidth / 2 - spider.offsetWidth / 2 - 10;
const sizeHeight = wall.offsetHeight / 2 - spider.offsetHeight / 2 - 10;

spider.style.top = `${sizeWidth}px`;
spider.style.left = `${sizeHeight}px`;
