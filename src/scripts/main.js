'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = `${(wall.clientWidth / 2) - (spider.offsetWidth / 2)}`;
spider.style.top = `${(wall.clientHeight / 2) - (spider.offsetHeight / 2)}`;
