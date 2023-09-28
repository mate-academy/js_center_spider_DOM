'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const bothPosition = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.left = spider.style.top = bothPosition + 'px';
