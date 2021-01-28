'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const x = wall.getBoundingClientRect().width / 2;
const y = wall.getBoundingClientRect().height / 2;
const spiderX = spider.getBoundingClientRect().width / 2;
const spiderY = spider.getBoundingClientRect().height / 2;
const border = getComputedStyle(wall).borderWidth;

spider.style.top = `${y - spiderY - parseInt(border)}px`;
spider.style.left = `${x - spiderX - parseInt(border)}px`;
