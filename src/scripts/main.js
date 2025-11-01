'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderX = spider.getBoundingClientRect();
const wallY = wall.getBoundingClientRect();

const left = (wallY.width - spiderX.width) / 2;
const tops = (wallY.height - spiderX.height) / 2;

spider.style.position = 'absolute';
spider.style.left = `${left}px`;
spider.style.top = `${tops}px`;
