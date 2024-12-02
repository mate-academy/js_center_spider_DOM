'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = wall.clientWidth / 2;
const centerY = wall.clientHeight / 2;

const centerSpider = spider.offsetWidth / 2;

spider.style.left = `${centerX - centerSpider}px`;
spider.style.top = `${centerY - centerSpider}px`;
