'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const posX = (wall.clientWidth - spider.clientWidth) / 2;
const posY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = posX + 'px';
spider.style.top = posY + 'px';
