'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${(wall.clientHeight - spider.offsetHeight) / 2}px`;
spider.style.left = `${(wall.clientHeight - spider.offsetHeight) / 2}px`;
