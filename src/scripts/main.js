'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallClientRect = wall.getBoundingClientRect();
const spiderClientRect = spider.getBoundingClientRect();
const wallWidth = wallClientRect.width;
const wallHeight = wallClientRect.height;
const spiderHeight = spiderClientRect.height;
const spiderWidth = spiderClientRect.width;

spider.style.left = (wallWidth - spiderWidth) / 2 - wall.clientLeft + 'px';
spider.style.top = (wallHeight - spiderHeight) / 2 - wall.clientTop + 'px';
