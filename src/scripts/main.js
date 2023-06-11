'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${wall.clientHeight / 2 - spider.offsetHeight / 2}px`;
spider.style.left = `${wall.clientHeight / 2 - spider.offsetHeight / 2}px`;
