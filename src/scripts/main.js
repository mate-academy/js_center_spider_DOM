'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const xPosition = (wallWidth - spiderWidth) / 2;
const yPosition = (wallHeight - spiderHeight) / 2;

spider.style.left = `${xPosition}px`;
spider.style.top = `${yPosition}px`;
