'use strict';

const spider = document.querySelector('img');
const wall = document.querySelector('div');
const wallBorder = Number.parseInt(getComputedStyle(wall).border);

const leftCoord = (wall.offsetWidth - spider.offsetWidth) / 2 - wallBorder;
const topCoord = (wall.offsetHeight - spider.offsetHeight) / 2 - wallBorder;

spider.style.left = leftCoord + 'px';
spider.style.top = topCoord + 'px';
