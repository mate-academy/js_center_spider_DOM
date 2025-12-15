'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const x = wall.clientHeight / 2 - spider.clientHeight / 2;
const y = wall.clientWidth / 2 - spider.clientWidth / 2;
spider.style.top = `${y}px`;
spider.style.left = `${x}px`;



