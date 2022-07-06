'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerWidth = wall.clientWidth / 2 - spider.offsetWidth / 2;
const centerHeight = wall.clientHeight / 2 - spider.offsetHeight / 2;

spider.style.left = `${centerWidth}px`;
spider.style.top = `${centerHeight}px`;
