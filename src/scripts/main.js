'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const center = wall.clientHeight / 2 - spider.offsetHeight / 2;

spider.style.top = `${center}px`;
spider.style.left = `${center}px`;
