'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const width = wall.clientWidth / 2 - spider.clientWidth / 2;
const height = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.top = `${width}px`;
spider.style.left = `${height}px`;
