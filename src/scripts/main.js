'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = 'auto';
spider.style.top = `${wall.clientHeight / 2}px`;
spider.style.right = `${wall.clientWidth / 2}px`;
spider.style.transform = 'translate(50%, -50%)';
