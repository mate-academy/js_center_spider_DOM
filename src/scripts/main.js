'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = wall.offsetHeight / 2 - spider.offsetHeight / 2 + 'px';
spider.style.left = wall.offsetWidth / 2 - spider.offsetWidth / 2 + 'px';
