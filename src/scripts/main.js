'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const offsetX = (wall.clientWidth - spider.clientWidth) / 2;
const offsetY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.top = `${offsetY}px`;
spider.style.left = `${offsetX}px`;
