'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const positionWidth = wall.clientWidth / 2 - spider.clientWidth / 2;
const positionHeight = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.top = `${positionHeight}px`;
spider.style.left = `${positionWidth}px`;
