'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const innerWallWidth = wall.clientWidth;
const innerWallHeight = wall.clientHeight;
const innerSpiderWidth = spider.clientWidth;
const innerSpiderHeight = spider.clientHeight;

spider.style.top = `${(innerWallHeight - innerSpiderHeight) / 2}px`;
spider.style.left = `${(innerWallWidth - innerSpiderWidth) / 2}px`;
