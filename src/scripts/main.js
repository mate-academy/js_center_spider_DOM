'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const height = wall.clientHeight / 2 - spider.clientHeight / 2;
const left = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = `${height}px`;
spider.style.left = `${left}px`;
