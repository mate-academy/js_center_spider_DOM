'use strict';

const wall = document.querySelector('[class = wall]');
const spider = document.querySelector('[class = spider]');

const spiderHeight = spider.offsetHeight;

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const countOfSides = 2;

const topSide = (wallHeight - spiderHeight) / countOfSides;
const leftSide = (wallWidth - spiderHeight) / countOfSides;

spider.style.top = `${topSide}px`;
spider.style.left = `${leftSide}px`;
