'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = parseFloat(getComputedStyle(wall).width);
const wallHeight = parseFloat(getComputedStyle(wall).height);
const spiderWidth = parseFloat(getComputedStyle(spider).width);
const spiderHieght = parseFloat(getComputedStyle(spider).height);

spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
spider.style.top = `${(wallHeight - spiderHieght) / 2}px`;
