'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
