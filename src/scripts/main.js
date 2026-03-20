'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const topPosition = wall.clientHeight / 2 - spider.clientHeight / 2;
const leftPosition = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
