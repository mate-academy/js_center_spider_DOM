'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const coordHeight = (wall.clientHeight - spider.clientHeight) / 2;
const coordWidth = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${coordHeight}px`;
spider.style.left = `${coordWidth}px`;
