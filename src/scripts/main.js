'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const width = wall.clientWidth;
const height = wall.clientHeight;

spider.style.top = `${(width - spider.height) / 2}px`;
spider.style.left = `${(height - spider.width) / 2}px`;
