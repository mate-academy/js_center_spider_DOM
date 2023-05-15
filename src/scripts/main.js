'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider')

// 1
spider.style.top = `${wall.clientHeight / 2 - spider.clientHeight / 2}px`;
spider.style.left = `${wall.clientWidth / 2 - spider.clientWidth / 2}px`;

// 2
// spider.style.position = 'absolute';
// spider.style.left = '50%';
// spider.style.top = '50%';
// spider.style.transform = 'translate(-50%, -50%)';
