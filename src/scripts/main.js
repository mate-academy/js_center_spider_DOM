'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.left = (wall.clientWidth - spider.clientWidth) / 2 + 'px';
spider.style.top = (wall.clientHeight - spider.clientHeight) / 2 + 'px';
