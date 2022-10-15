'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
spider.style.left = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
