'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topPos = (wall.clientHeight / 2) - (spider.offsetHeight / 2);
const leftPos = (wall.clientWidth / 2) - (spider.offsetWidth / 2);

spider.style = `top: ${topPos}px; left: ${leftPos}px`;
