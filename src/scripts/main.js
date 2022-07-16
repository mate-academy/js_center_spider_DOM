'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = (wall.offsetWidth - spider.offsetWidth) / 2 + 'px';
spider.style.top = (wall.offsetWidth - spider.offsetWidth) / 2 + 'px';
