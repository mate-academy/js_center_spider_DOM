'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const width = wall.offsetWidth / 2;
const heigth = wall.offsetHeight / 2;

const spiderWidth = spider.offsetWidth / 2;
const spiderHeigth = spider.offsetHeight / 2;

spider.style.top = heigth - spiderHeigth + 'px';
spider.style.left = width - spiderWidth + 'px';
