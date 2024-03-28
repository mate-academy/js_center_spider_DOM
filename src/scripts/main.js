'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const y = (wall.clientHeight - spider.clientHeight) / 2;
const x = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${x}px`;
spider.style.left = `${y}px`;
