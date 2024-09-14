'use strict';

// write code here
const wall = document.querySelector('div');
const spider = wall.querySelector('img');

const widthOfWall = wall.clientWidth;
const heightOfWall = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.top = `${(widthOfWall - spiderWidth) / 2}px`;
spider.style.left = `${(heightOfWall - spiderHeight) / 2}px`;
