'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const positionY = (wall.clientHeight - spider.offsetHeight) / 2;
const positionX = (wall.clientWidth - spider.offsetWidth) / 2;

spider.style.top = `${positionY}px`;
spider.style.left = `${positionX}px`;
