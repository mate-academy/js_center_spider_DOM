'use strict';

// write code here
const spider = document.querySelector('img.spider');
const wall = document.querySelector('div.wall');

spider.style.top = (wall.clientWidth - spider.clientWidth) / 2 + 'px';
spider.style.left = (wall.clientHeight - spider.clientHeight) / 2 + 'px';
