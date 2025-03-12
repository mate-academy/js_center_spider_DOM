'use strict';

const wall = document.body.querySelector('.wall');
const spider = document.body.querySelector('.spider');

const wallWhigth = wall.clientWidth;
const wallHeigth = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const heigth = (wallHeigth - spiderHeight) / 2;
const width = (wallWhigth - spiderWidth) / 2;

spider.style.position = 'absolute';
spider.style.top = heigth + 'px';
spider.style.left = width + 'px';
