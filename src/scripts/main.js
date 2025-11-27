'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const width = wall.clientWidth / 2 - spider.offsetWidth / 2;
const height = wall.clientHeight / 2 - spider.offsetHeight / 2;

wall.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.left = width + 'px';
spider.style.top = height + 'px';
