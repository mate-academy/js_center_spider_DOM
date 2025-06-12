'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const [spiderWidth, spiderHeight] = [spider.clientWidth, spider.clientHeight];
const [wallWidth, wallHeight] = [wall.clientWidth, wall.clientHeight];

const [x, y] = [
  wallWidth / 2 - spiderWidth / 2,
  wallHeight / 2 - spiderHeight / 2,
];

spider.style.left = `${x}px`;
spider.style.top = `${y}px`;
