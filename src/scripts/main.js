'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const centerTop = (wallHeight - spiderHeight) / 2;
const centerLeft = (wallWidth - spiderWidth) / 2;

spider.style.top = `${centerTop}px`;
spider.style.left = `${centerLeft}px`;
