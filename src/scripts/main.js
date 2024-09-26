'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderHeight = spider.clientHeight / 2;
const spiderWigth = spider.clientWidth / 2;

const wallHeight = wall.clientHeight / 2;
const wallWigth = wall.clientWidth / 2;

spider.style.top = `${wallHeight - spiderHeight}px`;
spider.style.left = `${wallWigth - spiderWigth}px`;
