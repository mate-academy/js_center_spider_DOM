'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const centerWidthWall = wall.clientWidth / 2;
const centerHeightWall = wall.clientHeight / 2;
const centerWidthSpider = spider.offsetWidth / 2;
const centerHeightSpider = spider.offsetHeight / 2;

spider.style.left = centerWidthWall - centerWidthSpider + 'px';
spider.style.top = centerHeightWall - centerHeightSpider + 'px';
