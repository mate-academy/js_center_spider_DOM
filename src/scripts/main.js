'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.top = `${(wall.clientHeight - spiderHeight) / 2}px`;
spider.style.left = `${(wall.clientWidth - spiderWidth) / 2}px`;
