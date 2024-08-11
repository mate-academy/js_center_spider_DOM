'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallClientRect = wall.getBoundingClientRect();
const spiderClientRect = spider.getBoundingClientRect();
const wallWidth = wallClientRect.width;
const wallHeight = wallClientRect.height;
const spiderHeight = spiderClientRect.height;
const spiderWidth = spiderClientRect.width;

spider.style.left = (wallWidth - spiderWidth - wall.clientLeft) / 2 + 'px';
spider.style.top = (wallHeight - spiderHeight - wall.clientTop) / 2 + 'px';
