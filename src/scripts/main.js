'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallStyles = getComputedStyle(wall);
const spiderStyles = getComputedStyle(spider);
let targetX = wallStyles.width;
let targetY = wallStyles.height;
let spiderWidth = spiderStyles.width;
let spiderHeight = spiderStyles.height;

targetX = +targetX.slice(0, -2) / 2;
targetY = +targetY.slice(0, -2) / 2;

spiderWidth = +spiderWidth.slice(0, -2) / 2;
spiderHeight = +spiderHeight.slice(0, -2) / 2;

const spiderX = targetX - spiderWidth;
const spiderY = targetY - spiderHeight;

spider.style.left = spiderX + 'px';
spider.style.top = spiderY + 'px';
