'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const halfWallWidth = wall.clientWidth / 2;
const halfWallHeight = wall.clientHeight / 2;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const halfSpiderWidth = spider.clientWidth / 2;
const halfSpiderHeight = spider.clientHeight / 2;

spider.style.left = `${halfWallWidth - halfSpiderWidth}px`;
spider.style.top = `${halfWallHeight - halfSpiderHeight}px`;
