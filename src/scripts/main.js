'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const posY = wall.clientHeight / 2 - spider.clientHeight / 2;
const posX = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = `${posY}px`;
spider.style.left = `${posX}px`;
