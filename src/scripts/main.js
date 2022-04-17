'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topPos = (wall.clientHeight - spider.clientHeight) / 2;
const leftPos = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.cssText = `top: ${topPos}px; left: ${leftPos}px`;
