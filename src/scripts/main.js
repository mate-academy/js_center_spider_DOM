'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fromLeft = wall.clientWidth / 2 - spider.clientWidth / 2;
const fromTop = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.top = fromTop + 'px';
spider.style.left = fromLeft + 'px';
