'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = `${wall.offsetHeight / 2 - spider.offsetHeight / 2}px`;
spider.style.left = `${wall.offsetWidth / 2 - spider.offsetWidth / 2}px`;
