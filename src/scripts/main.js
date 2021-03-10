'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

spider.style.top = (wall.clientWidth - spider.offsetWidth) / 2 + 'px';
spider.style.left = (wall.clientHeight - spider.offsetHeight) / 2 + 'px';
