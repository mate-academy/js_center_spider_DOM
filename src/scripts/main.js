'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerWithOfWall = wall.clientWidth / 2;
const centerHeightOfWall = wall.clientHeight / 2;

const centerHeightOfSpider = spider.clientHeight / 2;
const centerWidthOfSpider = spider.clientWidth / 2;

spider.style.left = `${centerWithOfWall - centerWidthOfSpider}px`;
spider.style.top = `${centerHeightOfWall - centerHeightOfSpider}px`;
