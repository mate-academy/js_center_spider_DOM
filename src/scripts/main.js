'use strict';

const spider = document.querySelector('img');
const wall = document.querySelector('div');
const border = Number.parseFloat(getComputedStyle(wall).border);

const leftCoord = (wall.offsetWidth - spider.offsetWidth) / 2 - border;
const topCoord = (wall.offsetHeight - spider.offsetHeight) / 2 - border;

spider.style.left = leftCoord + 'px';
spider.style.top = topCoord + 'px';
