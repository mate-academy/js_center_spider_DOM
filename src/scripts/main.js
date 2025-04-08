'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeigth = wall.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeigth = spider.offsetHeight;

const left = (wallWidth - spiderWidth) / 2;
const tops = (wallHeigth - spiderHeigth) / 2;

spider.style.position = 'absolute';
spider.style.top = `${tops}px`;
spider.style.left = `${left}px`;
