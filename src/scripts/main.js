'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topSpider = (wall.clientHeight - spider.offsetHeight) / 2;
const leftSpider = (wall.clientWidth - spider.offsetWidth) / 2;

spider.style.top = `${topSpider}px`;
spider.style.left = `${leftSpider}px`;
