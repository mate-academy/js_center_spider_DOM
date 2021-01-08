'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

spider.style.left = `${(wall.clientWidth - spiderWidth) / 2}px`;
spider.style.top = `${(wall.clientHeight - spiderHeight) / 2}px`;
