'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderSizes = spider.getBoundingClientRect();

const centerX = wall.clientWidth / 2;
const centerY = wall.clientHeight / 2;

const spiderCenterH = spiderSizes.height / 2;
const spiderCenterW = spiderSizes.width / 2;

spider.style.left = centerX - spiderCenterW + 'px';
spider.style.top = centerY - spiderCenterH + 'px';
