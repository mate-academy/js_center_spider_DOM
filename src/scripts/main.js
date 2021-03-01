'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const halfWallWidth = wallWidth / 2;
const halfWallHeight = wallHeight / 2;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const halfSpiderWidth = spiderWidth / 2;
const halfSpiderHeight = spiderHeight / 2;

spider.style.left = `${halfWallWidth - halfSpiderWidth}px`;
spider.style.top = `${halfWallHeight - halfSpiderHeight}px`;
