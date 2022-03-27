'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderTop = wall.clientHeight / 2 - spider.clientHeight / 2;
const spiderLeft = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
