'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const width = wall.clientWidth;
const height = wall.clientHeight;
const widthSpider = spider.clientWidth;

spider.style.top = (height - widthSpider) / 2 + 'px';
spider.style.left = (width - widthSpider) / 2 + 'px';
