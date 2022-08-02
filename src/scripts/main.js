'use strict';

// write code here
const spider = document.querySelector('.spider')
const wall = document.querySelector('.wall')
const width = (wall.clientWidth - spider.clientWidth) / 2;
const height = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.top = `${height}px`;
spider.style.left = `${width}px`;