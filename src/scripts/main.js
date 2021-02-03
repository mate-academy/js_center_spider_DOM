'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const topPosition = wall.clientHeight / 2 - spider.offsetWidth / 2;

const leftPosition = wall.clientWidth / 2 - spider.offsetHeight / 2;

spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
