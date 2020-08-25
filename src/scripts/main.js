'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const topValue = (wall.clientHeight - spider.offsetHeight) / 2;
const leftValue = (wall.clientWidth - spider.offsetWidth) / 2;

spider.setAttribute('style', `top: ${topValue}px; left: ${leftValue}px`);
