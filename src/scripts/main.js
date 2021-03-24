'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const topPos = (wall.clientWidth - spider.offsetWidth) / 2;
const leftPos = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.top = `${topPos}px`;
spider.style.left = `${leftPos}px`;
