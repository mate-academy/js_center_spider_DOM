'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = `${wall.clientHeight / 2 - spider.offsetHeight / 2}px`;
spider.style.left = `${wall.clientWidth / 2 - spider.offsetWidth / 2}px`;
