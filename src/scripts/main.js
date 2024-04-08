'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallValues = wall.getBoundingClientRect();
const spiderValues = spider.getBoundingClientRect();

const calculatedValue = (wallValues.width - 20 - spiderValues.height) / 2;

spider.style.top = `${calculatedValue}px`;
spider.style.left = `${calculatedValue}px`;
