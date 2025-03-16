'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const width = (wall.clientWidth - spider.clientWidth) / 2;
const left = (wall.clientHeight - spider.clientHeight) / 2;


spider.style.top = `${width}px`;
spider.style.left = `${left}px`;
