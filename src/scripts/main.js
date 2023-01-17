'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${wall.clientHeight / 2 - spider.offsetHeight / 2}px`;
spider.style.left = `${wall.clientWidth / 2 - spider.offsetWidth / 2}px`;

// spider.style.top = '50%';
// spider.style.left = '50%';
// spider.style.transform = 'translate(-50%, -50%)';
