'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const topSpider = (wall.clientHeight - spider.clientHeight) / 2;
const leftSoider = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${topSpider}px`
spider.style.left = `${leftSoider}px`