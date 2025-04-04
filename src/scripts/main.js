'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderTop = (wall.clientHeight - spider.clientHeight) / 2;
const spiderRight = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${spiderTop}px`;
spider.style.right = `${spiderRight}px`;
