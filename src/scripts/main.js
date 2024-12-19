'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.getBoundingClientRect().width;
const wallHeight = wall.getBoundingClientRect().height;

const spiderWidth = spider.getBoundingClientRect().width;
const spiderHeight = spider.getBoundingClientRect().height;

const xCoord = wallWidth / 2 - spiderWidth / 2;
const yCoord = wallHeight / 2 - spiderHeight / 2;

spider.style.top = `${yCoord}px`;
spider.style.left = `${xCoord}px`;
