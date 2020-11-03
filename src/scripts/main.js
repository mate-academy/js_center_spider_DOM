'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const topParam = wall.clientHeight / 2 - spider.clientHeight / 2;
const rightParam = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = `${topParam}px`;
spider.style.left = `${rightParam}px`;
