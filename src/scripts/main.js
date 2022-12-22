'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const coordY = (wall.clientHeight - spider.offsetHeight) / 2;
const coordX = (wall.clientWidth - spider.offsetWidth) / 2;

spider.style.top = `${coordX}px`;
spider.style.left = `${coordY}px`;
