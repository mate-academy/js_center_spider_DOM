'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const verticalCenter = wall.clientHeight / 2;
const horizontalCenter = wall.clientWidth / 2;

spider.style.top = `${verticalCenter - spider.clientHeight / 2}px`;
spider.style.left = `${horizontalCenter - spider.clientWidth / 2}px`;
