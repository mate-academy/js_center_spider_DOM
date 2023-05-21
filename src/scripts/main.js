'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const leftMove = (wall.clientWidth - spider.clientWidth) / 2;
const topMove = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${leftMove}px`;
spider.style.top = `${topMove}px`;
