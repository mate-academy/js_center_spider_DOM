'use strict';

const wall = document.querySelector('.wall');
const centerWallWidth = wall.clientWidth / 2;
const centerWallHeight = wall.clientHeight / 2;

const spider = document.querySelector('.spider');
const centerSpiderWidth = spider.clientWidth / 2;
const centerSpiderHeight = spider.clientHeight / 2;

spider.style.top = `${centerWallHeight - centerSpiderHeight}px`;
spider.style.left = `${centerWallWidth - centerSpiderWidth}px`;
