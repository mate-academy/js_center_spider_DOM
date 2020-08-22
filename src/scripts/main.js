'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = spider.clientWidth / 2;
const spiderHeight = spider.clientHeight / 2;
const widthWall = wall.clientWidth / 2 - spiderWidth;
const heightWall = wall.clientHeight / 2 - spiderHeight;

spider.style.left = widthWall + 'px';
spider.style.top = heightWall + 'px';
