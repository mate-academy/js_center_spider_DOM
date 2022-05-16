'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const position = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.cssText = `top: ${position}px; left: ${position}px`;
