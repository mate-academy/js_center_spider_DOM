'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const x = (wall.clientWidth - spider.clientWidth) / 2;
const y = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${x}px`;
spider.style.top = `${y}px`;
