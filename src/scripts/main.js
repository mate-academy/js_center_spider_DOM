'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const centerTop = wall.clientHeight / 2 - spider.offsetHeight / 2;
const centerLeft = wall.clientWidth / 2 - spider.offsetWidth / 2;

spider.style.position = 'absolute';
spider.style.top = `${centerTop}px`;
spider.style.left = `${centerLeft}px`;
