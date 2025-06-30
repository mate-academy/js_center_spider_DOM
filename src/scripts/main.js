'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const positionLeft = (wall.clientWidth - spider.width) / 2;
const positionTop = (wall.clientHeight - spider.height) / 2;

spider.style.left = `${positionLeft}px`;
spider.style.top = `${positionTop}px`;
