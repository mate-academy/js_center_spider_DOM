'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';

spider.style.position = 'absolute';
spider.style.left = `${wall.clientHeight / 2 - spider.clientHeight / 2}px`;
spider.style.top = `${wall.clientWidth / 2 - spider.clientWidth / 2}px`;
