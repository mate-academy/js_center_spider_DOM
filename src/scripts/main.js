'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const topPosition = (wall.clientHeight - spider.clientHeight) / 2;
const leftPosition = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
