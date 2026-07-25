'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const xCoord = wall.clientWidth / 2 - spider.offsetWidth / 2;
const yCoord = wall.clientHeight / 2 - spider.offsetHeight / 2;

spider.style.left = xCoord + 'px';
spider.style.top = yCoord + 'px';
