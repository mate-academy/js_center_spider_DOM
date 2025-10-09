'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topValue = Math.round(wall.clientHeight / 2 - spider.clientHeight / 2);
const leftValue = Math.round(wall.clientWidth / 2 - spider.clientWidth / 2);

spider.style.position = 'absolute';
spider.style.top = `${topValue}px`;
spider.style.left = `${leftValue}px`;
