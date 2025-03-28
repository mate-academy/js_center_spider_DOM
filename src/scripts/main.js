'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const positionHeight = (wall.clientHeight - spider.clientHeight) / 2;
const positionWidth = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${positionHeight}px`;
spider.style.left = `${positionWidth}px`;
