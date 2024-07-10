'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const posTop = wall.clientHeight / 2 - spider.clientHeight / 2;
const posLeft = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = `${posTop}px`;
spider.style.left = `${posLeft}px`;
