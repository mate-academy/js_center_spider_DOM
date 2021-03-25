'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const height = (wall.clientHeight - spider.clientHeight) / 2;
const width = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${height}px`;
spider.style.left = `${width}px`;
