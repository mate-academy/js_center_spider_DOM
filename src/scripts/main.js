'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const coorX = (wall.clientWidth / 2) - (spider.clientWidth / 2);
const coorY = (wall.clientHeight / 2) - (spider.clientHeight / 2);

spider.style.top = `${coorY}px`;
spider.style.left = `${coorX}px`;
