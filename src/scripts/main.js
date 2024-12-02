'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHalfWidth = `${wall.clientWidth / 2}px`;

spider.style.top = wallHalfWidth;
spider.style.left = wallHalfWidth;

spider.style.transform = 'translate(-50%, -50%)';
