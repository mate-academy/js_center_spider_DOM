'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = (wall.clientWidth - spider.clientWidth) / 2;
const centerY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
// const spider = document.querySelector('.spider');

// spider.style.transform = 'translate(-50%, -50%)';
// spider.style.left = '50%';
// spider.style.top = '50%';
