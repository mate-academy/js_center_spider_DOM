'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const spiderHeight = spider.clientHeight;

const wallWidht = wall.clientWidth;
const spiderWidht = spider.clientWidth;

const verticalPossition = (wallHeight - spiderHeight) / 2;
const horizontalPosition = (wallWidht - spiderWidht) / 2;

spider.style.top = `${verticalPossition}px`;
spider.style.left = `${horizontalPosition}px`;
