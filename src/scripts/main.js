'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const topPosition = ((wall.offsetHeight - wall.clientTop * 2) / 2)
- spider.offsetHeight / 2;

const leftPosition = ((wall.offsetWidth - wall.clientLeft * 2) / 2)
- spider.offsetWidth / 2;

spider.style.transform = `translate(${topPosition}px, ${leftPosition}px)`;
