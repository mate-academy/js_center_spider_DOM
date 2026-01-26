'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const x = (wall.offsetWidth - spider.offsetWidth) / 2;
const y = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.position = 'absolute';
spider.style.top = y + 'px';
spider.style.left = x + 'px';
