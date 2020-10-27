'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const spiderWidth = spider.clientWidth;
const wallHeight = wall.clientHeight;
const spiderHeight = spider.clientHeight;

spider.style.cssText = `left: ${(wallWidth - spiderWidth) / 2}px; 
top: ${(wallHeight - spiderHeight) / 2}px`;
