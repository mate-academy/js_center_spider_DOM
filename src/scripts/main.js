'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.left = (wall.clientWidth - spider.offsetWidth) / 2 + 'px';
spider.style.top = (wall.clientHeight - spider.offsetHeight) / 2 + 'px';
