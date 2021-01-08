'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.left = `${(wall.clientWidth - spiderWidth) / 2}px`;
spider.style.top = `${(wall.clientHeight - spiderHeight) / 2}px`;
