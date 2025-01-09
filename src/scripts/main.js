'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftCoord = (wall.clientWidth - spider.clientWidth) / 2;
const topCoord = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${leftCoord}px`;
spider.style.top = `${topCoord}px`;
