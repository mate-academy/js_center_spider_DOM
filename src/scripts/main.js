'use strict';

const wall = document.querySelector('.wall');
const wallClientWidth = wall.clientWidth;
const wallClientHeight = wall.clientHeight;
const spider = document.querySelector('.spider');
const spiderClientWidth = spider.clientWidth;
const spiderClientHeight = spider.clientHeight;

spider.style.left = `${(wallClientWidth - spiderClientWidth) / 2}px`;
spider.style.top = `${(wallClientHeight - spiderClientHeight) / 2}px`;
