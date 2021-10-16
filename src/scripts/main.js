'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallCoord = wall.getBoundingClientRect();
const spiderCoord = spider.getBoundingClientRect();
const border = parseFloat(getComputedStyle(wall).borderWidth);

spider.style.left = `${(wallCoord.width - spiderCoord.width) / 2 - border}px`;
spider.style.top = `${(wallCoord.height - spiderCoord.height) / 2 - border}px`;
