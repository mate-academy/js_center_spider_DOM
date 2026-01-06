'use strict';

const wall = document.body.querySelector('.wall');
const spider = wall.querySelector('.spider');

const offsetY = (wall.clientHeight - spider.clientHeight) / 2;
const offsetX = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${offsetY}px`;
spider.style.left = `${offsetX}px`;
