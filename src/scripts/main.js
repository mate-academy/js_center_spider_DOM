'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = (wall.scrollWidth - spider.scrollHeight) / 2 + 'px';
spider.style.left = (wall.scrollWidth - spider.scrollWidth) / 2 + 'px';
