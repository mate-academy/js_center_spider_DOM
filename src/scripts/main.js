'use strict';

const spider = document.querySelector('img');
const wall = document.querySelector('div');
const borderSize = Number.parseFloat(getComputedStyle(wall).border);

const leftCoord = (wall.offsetWidth - spider.offsetWidth) / 2 - borderSize;
const topCoord = (wall.offsetHeight - spider.offsetHeight) / 2 - borderSize;

spider.style.left = leftCoord + 'px';
spider.style.top = topCoord + 'px';
