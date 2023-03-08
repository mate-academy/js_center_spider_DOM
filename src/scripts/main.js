'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const y = (wall.clientWidth - spider.width) / 2;
const x = (wall.clientHeight - spider.height) / 2;

spider.style.top = `${y}px`;
spider.style.left = `${x}px`;
