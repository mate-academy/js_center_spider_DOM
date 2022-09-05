'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const leftPosition = wall.clientWidth / 2;
const topPosition = wall.clientHeight / 2;
const shiftX = spider.clientWidth / 2;
const shiftY = spider.clientHeight / 2;

spider.style.left = `${leftPosition - shiftX}px`;
spider.style.top = `${topPosition - shiftY}px`;
