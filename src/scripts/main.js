'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const horizontalCenter = wall.clientWidth / 2;
const verticalCenter = wall.clientHeight / 2;
const spiderHorizontalCenter = spider.clientWidth / 2;
const spiderVerticalCenter = spider.clientHeight / 2;

spider.style.top = verticalCenter - spiderVerticalCenter + 'px';
spider.style.left = horizontalCenter - spiderHorizontalCenter + 'px';
