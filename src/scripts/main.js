'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const halfWallWidth = wall.clientWidth / 2;
const halfSpiderWidth = spider.clientWidth / 2;

const halfWallHeight = wall.clientHeight / 2;
const halfSpiderHeight = spider.clientHeight / 2;

spider.style.top = halfWallHeight - halfSpiderHeight + 'px';
spider.style.left = halfWallWidth - halfSpiderWidth + 'px';
