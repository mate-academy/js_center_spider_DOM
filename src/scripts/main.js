'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const left = (wall.offsetWidth - spider.offsetWidth) / 2;
const height = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.left = `${left}px`;
spider.style.top = `${height}px`;
