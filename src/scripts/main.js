'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallCenterY = wall.clientHeight / 2;
const wallCenterX = wall.clientWidth / 2;

const halfHeightSpider = spider.clientHeight / 2;
const halfWidthSpider = spider.clientWidth / 2;

const centerY = wallCenterY - halfHeightSpider;
const centerX = wallCenterX - halfWidthSpider;

spider.style.top = centerY + 'px';
spider.style.left = centerX + 'px';
