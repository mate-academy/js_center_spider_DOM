'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const topSpider = wall.scrollHeight / 2 - spider.scrollHeight / 2;

const leftSpider = wall.scrollWidth / 2 - spider.scrollWidth / 2;

spider.style.top = `${topSpider}px`;
spider.style.left = `${leftSpider}px`;
