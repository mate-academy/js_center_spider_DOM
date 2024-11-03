'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
wall.style.boxSizing = 'border-box';

const rect = wall.getBoundingClientRect();
let width = rect.width;
let height = rect.height;

const rectSpider = spider.getBoundingClientRect();
const widthSpider = rectSpider.width;
const heightSpider = rectSpider.height;

width = width / 2 - widthSpider / 2;
height = height / 2 - heightSpider / 2;

spider.style.left = `${width}px`;
spider.style.top = `${height}px`;
spider.style.position = 'absolute';

// write code here
