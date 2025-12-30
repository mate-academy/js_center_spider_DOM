'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Get sizes
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

// Calculate centered position
const leftPosition = (wallWidth - spiderWidth) / 2;
const topPosition = (wallHeight - spiderHeight) / 2;

// Apply position
spider.style.left = `${leftPosition}px`;
spider.style.top = `${topPosition}px`;
