'use strict';

const wall = document.querySelector('.wall');
const style = getComputedStyle(wall);
const spider = document.querySelector('.spider');
const styleSpider = getComputedStyle(spider);
const width = parseFloat(style.width);
const height = parseFloat(style.height);
const widthSpider = parseFloat(styleSpider.width);

spider.style.top = height / 2 - widthSpider / 2 + 'px';
spider.style.left = width / 2 - widthSpider / 2 + 'px';
