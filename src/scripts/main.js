'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = wall.clientWidth / 2;
const wallHeight = wall.clientHeight / 2;
const spiderWidth = spider.offsetWidth / 2;
const spiderHeight = spider.offsetHeight / 2;
const centrSpiderX = wallWidth - spiderWidth;
const centrSpiderY = wallHeight - spiderHeight;

spider.style.left = `${centrSpiderX}px`;
spider.style.top = `${centrSpiderY}px`;
