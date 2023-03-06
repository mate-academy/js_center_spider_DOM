'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const halfWallWidth = wall.clientWidth / 2;
const halfWallHeight = wall.clientHeight / 2;
const halfSpiderWidth = spider.offsetWidth / 2;
const halfSpiderHeight = spider.offsetHeight / 2;

spider.style.top = `${halfWallWidth - halfSpiderWidth}px`;
spider.style.left = `${halfWallHeight - halfSpiderHeight}px`;
