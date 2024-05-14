'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderSize = spider.getBoundingClientRect();

const x = (wallWidth - spiderSize.width) / 2;
const y = (wallHeight - spiderSize.height) / 2;

spider.style.top = `${x}px`;
spider.style.left = `${y}px`;
