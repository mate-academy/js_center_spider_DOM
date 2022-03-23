'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = (wall.clientWidth - spider.offsetHeight) / 2 + 'px';
spider.style.left = (wall.clientWidth - spider.offsetWidth) / 2 + 'px';
