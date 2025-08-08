'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topPosition = (wall.clientHeight - spider.offsetHeight) / 2;
const leftPosition = (wall.clientWidth - spider.offsetWidth) / 2;

spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
