'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

spider.style.top = `${(wallHeight / 2) - 25}px`;
spider.style.left = `${(wallWidth / 2) - 25}px`;
