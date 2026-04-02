'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const posLeft = wall.clientWidth / 2;
const posTop = wall.clientHeight / 2;

spider.style.position = 'absolute';
spider.style.left = `${posLeft - spider.offsetWidth / 2}px`;
spider.style.top = `${posTop - spider.offsetHeight / 2}px`;
