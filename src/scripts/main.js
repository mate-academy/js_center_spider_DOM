'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = `${wall.clientWidth / 2 - spider.width / 2}px`;
spider.style.top = `${wall.clientHeight / 2 - spider.height / 2}px`;
