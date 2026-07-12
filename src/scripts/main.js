'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const wightSpider = spider.offsetWidth;
const heightSpider = spider.offsetHeight;
const centerWidth = (wallWidth - wightSpider - 20) / 2;
const centerHeight = (wallHeight - heightSpider - 20) / 2;

spider.style.left = centerWidth + 'px';
spider.style.top = centerHeight + 'px';
