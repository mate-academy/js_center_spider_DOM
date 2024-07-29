'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const centreX = wall.clientWidth / 2;
const centreY = wall.clientHeight / 2;

const centreOfSpider = spider.offsetWidth / 2;

spider.style.left = centreX - centreOfSpider + 'px';
spider.style.top = centreY - centreOfSpider + 'px';
