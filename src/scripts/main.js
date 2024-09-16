'use strict';

const spider = document.querySelector('.spider');
const wall = spider.offsetParent;

const moveY = wall.clientHeight / 2 - spider.offsetHeight / 2;
const moveX = wall.clientWidth / 2 - spider.offsetWidth / 2;

spider.style.top = `${moveY}px`;
spider.style.left = `${moveX}px`;
