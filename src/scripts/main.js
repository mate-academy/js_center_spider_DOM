'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();

const centerX = wallRect.width / 2;
const centerY = wallRect.height / 2;

spider.style.left = `${centerX - spider.offsetWidth / 2}px`;
spider.style.top = `${centerY - spider.offsetHeight / 2}px`;
