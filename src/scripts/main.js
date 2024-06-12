'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = parseFloat(getComputedStyle(wall).width);
const spiderWidth = parseFloat(getComputedStyle(spider).width);
const wallHeight = parseFloat(getComputedStyle(wall).height);
const spiderHeight = parseFloat(getComputedStyle(spider).height);

wall.style.position = 'relative';
spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
