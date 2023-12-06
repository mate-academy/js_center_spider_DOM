'use strict';

const spider = document.querySelector('.spider');
const spiderStyle = getComputedStyle(spider);
const spiderHeight = parseFloat(spiderStyle.height);
const spiderWidth = parseFloat(spiderStyle.width);

const wall = document.querySelector('.wall');
const wallStyle = getComputedStyle(wall);
const wallHeight = parseFloat(wallStyle.height);
const wallWidth = parseFloat(wallStyle.width);

spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
console.log(wallHeight);
