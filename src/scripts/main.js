'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const coordX = (wall.clientWidth - spider.clientWidth) / 2;
const coordY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${coordX}px`;
spider.style.top = `${coordY}px`;
