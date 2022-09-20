'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const style = getComputedStyle(wall);

const wallWidth = parseFloat(style.width);
const wallHeight = parseFloat(style.height);

spider.style.left = `${(wallWidth / 2) - (spider.height / 2)}px`;
spider.style.top = `${(wallHeight / 2) - (spider.height / 2)}px`;
