'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const posLeft = (wall.clientWidth - spider.offsetWidth) / 2;
const posTop = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.left = `${posLeft}px`;
spider.style.top = `${posTop}px`;
