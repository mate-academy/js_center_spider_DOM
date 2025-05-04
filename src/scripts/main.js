'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftPosit = (wall.clientWidth - spider.offsetWidth) / 2;
const topPosit = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = `${leftPosit}px`;
spider.style.top = `${topPosit}px`;
