'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const topSpider = (wallHeight - spiderHeight) / 2;
const leftSpider = (wallWidth - spiderWidth) / 2;

spider.style.top = `${topSpider}px`;
spider.style.left = `${leftSpider}px`;
