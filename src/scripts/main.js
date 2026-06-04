'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderLeft = (wall.clientWidth - spider.offsetWidth) / 2;

const spiderTop = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
